import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
//import HomeCard from '../../components/card/HomeCard/HomeCard';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import database from '@react-native-firebase/database';
import HomeCard from '../../components/card/HomeCard';
import { getAuth } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
//import SearchBar from '../../components/SearchBar';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);
  //const [userList, setUserList] = useState([]);

  useEffect(() => {
    const reference = database().ref('chatRooms/');
    const onValueChange = reference.on('value', snapshot => {
      const contentData = snapshot.val();
      if (contentData) {
        const formattedData = Object.keys(contentData).map(key => ({
          id: key,
          ...contentData[key],
        }));
        setContentList(formattedData);
      } else {
        setContentList([]);
      }
    });
    return () => reference.off('value', onValueChange);
  }, []);


  const sendContent = content => {
    const user = auth().currentUser;
    console.log('user', user)
    const contentObject = {
      title: content,
      theme: '',
      url: '',
      chatUsers: [user.uid],
    };
    const newRoomRef = database().ref('chatRooms/').push(contentObject);

    const newRoomId = newRoomRef.key;
    console.log(newRoomId);

    if(user){
        database().ref(`users/${user.uid}`).update({
        chatList: [newRoomId],
      });
    }
  };

  const handleSendContent = content => {
    toggleVisible();
    sendContent(content);
  };

  const toggleVisible = () => {
    setModalVisible(!modalVisible);
  };

  const renderContent = ({item}) => 
  <HomeCard 
  onPress={() => navigation.navigate('ChatRoom', {roomId: item.id, chatRoomName: item.title})} 
  data={item} 
  />
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList 
      data={contentList}
      renderItem={renderContent}
      />
      <FloatingButton name="plus" onPress={toggleVisible} />
      <ContentInputModal
        onClose={toggleVisible}
        visible={modalVisible}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Home;
