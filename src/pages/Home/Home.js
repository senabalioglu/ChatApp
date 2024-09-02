import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import HomeCard from '../../components/card/HomeCard';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import styles from './Home.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../components/SearchBar/SearchBar';
//import UserCard from '../../components/card/UserCard/UserCard';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);
  const [userChatList, setUserChatList] = useState([]);
  //const [usersList, setUsersList] = useState([]);

  /*
  useEffect(() => {
    const reference = database().ref('users/');
    const onValueChange = reference.on('value', snapshot => {
      const userData = snapshot.val();
      if (userData) {
        const filteredData = Object.keys(userData).map(key => ({
          id: key,
          ...userData[key],
        }));
        setUsersList(filteredData);
      } else {
        setUsersList([]);
      }
    });
    return () => reference.off('value', onValueChange);
  }, []);
  */

  useEffect(() => {
    const user = auth().currentUser;

    if (user) {
      const userChatListRef = database().ref(`users/${user.uid}/chatList`);
      userChatListRef.on('value', snapshot => {
        const chatList = snapshot.val() || [];
        setUserChatList(chatList);
      });
    }
  }, []);

  useEffect(() => {
    const reference = database().ref('chatRooms');
    const onValueChange = reference.on('value', snapshot => {
      const contentData = snapshot.val();
      
      if (contentData) {
        
        const filteredData = Object.keys(contentData)
          .filter(key => userChatList.includes(key))
          .map(key => ({
            id: key,
            ...contentData[key],
          }));
          
        setContentList(filteredData);
      } else {
        setContentList([]);
      }
    });
    return () => reference.off('value', onValueChange);
  }, [userChatList]);

  const sendContent = content => {

    const user = auth().currentUser;
    const contentObject = {
      title: content,
      theme: '',
      url: '',
      chatUsers: [user.uid],
    };
    
    const newRoomRef = database().ref('chatRooms/').push(contentObject)
    const newRoomId = newRoomRef.key;
    if (user) {
      const userChatListRef = database().ref(`users/${user.uid}/chatList`);
      userChatListRef.once('value', snapshot => {
        const currentChatList = snapshot.val() || [];
        const updatedChatList = [...currentChatList, newRoomId];

        userChatListRef.set(updatedChatList);
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

  const renderContent = ({item}) => (
    <HomeCard
      onPress={() =>
        navigation.navigate('ChatRoom', {
          roomId: item.id,
          chatRoomName: item.title,
        })
      }
      data={item}
    />
  );
  /*
  const renderUser = ({item}) => (
    <UserCard
    showCheckbox={false}
    onPress={() =>
      navigation.navigate('ChatRoom', {
        roomId: item.id,
        chatRoomName: item.title,
      })
    }
      data={item}
    />
  );
  */
  return (
    <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1}}>
      <View style={styles.container} >
      <SearchBar />
      <View style={styles.header_container} >
      <Text style={styles.header} >Odalar</Text>
      <Icon color={'black'} size={30} onPress={toggleVisible} name='plus' />
      </View>
      <FlatList
        data={contentList}
        renderItem={renderContent}
        keyExtractor={item => item.id}
        /*
        ListHeaderComponent={() => (
          <FlatList
            data={usersList}
            renderItem={renderUser}
            keyExtractor={item => item.id}
          />
        )}
        */
      />
      </View>
      <ContentInputModal
        onClose={toggleVisible}
        visible={modalVisible}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Home;
