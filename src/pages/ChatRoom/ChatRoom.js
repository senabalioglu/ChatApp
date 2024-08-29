import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ChatRoomCard from '../../components/card/ChatRoomCard/ChatRoomCard';
import parseContentData from '../../utils/parseContentData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ChatRoom.styles';

const ChatRoom = ({route, navigation}) => {
  const {roomId, chatRoomName} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    navigation.setOptions({title: chatRoomName});
  }, [navigation, chatRoomName]);

  useEffect(() => {
    const reference = database().ref(`chatHistory/${roomId}/`);
    const onValueChange = reference.on('value', snapshot => {
      const messageData = snapshot.val();
      if (messageData) {
        const parseData = parseContentData(messageData || {});
        setMessageList(parseData);
      }
    });
    return () => reference.off('value', onValueChange);
  }, []);

  const toggleVisible = () => {
    setModalVisible(!modalVisible);
  };

  const sendContent = content => {
    const userMail = auth().currentUser.email;
    const user = auth().currentUser;
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      userId: user.uid,
    };
    database().ref(`chatHistory/${roomId}/`).push(contentObject);
  };

  const handleSendContent = content => {
    toggleVisible();
    sendContent(content);
  };

  const renderMessages = ({item}) => <ChatRoomCard data={item} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container} >
        <View style={styles.header_container} >
          <Text style={styles.header} >Mesajlar</Text>
          <Icon color="black" onPress={toggleVisible} size={30} name="plus" />
        </View>
        <FlatList data={messageList} renderItem={renderMessages} />
        <ContentInputModal
          onClose={toggleVisible}
          visible={modalVisible}
          onSend={handleSendContent}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatRoom;
