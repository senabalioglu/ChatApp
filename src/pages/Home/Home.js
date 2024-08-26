import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
//import HomeCard from '../../components/card/HomeCard/HomeCard';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import database from '@react-native-firebase/database';
import HomeCard from '../../components/card/HomeCard';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    const reference = database().ref('rooms/');
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
    const contentObject = {
      roomName: content,
    };
    database()
      .ref('rooms/')
      .push(contentObject)
      .then(() => console.log('Room added successfully'))
      .catch(error => console.error('Failed to add room:', error));
  };

  const handleSendContent = content => {
    toggleVisible();
    sendContent(content);
  };

  const toggleVisible = () => {
    setModalVisible(!modalVisible);
  };

  const renderContent = ({item}) => <HomeCard data={item} />
  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchBar />
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
