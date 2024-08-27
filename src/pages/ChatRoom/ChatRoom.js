import React, {useState, useEffect} from "react";
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import FloatingButton from "../../components/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInputModal/ContentInputModal";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ChatRoomCard from "../../components/card/ChatRoomCard/ChatRoomCard";

const ChatRoom =({route, navigation}) => {
    
    const { roomId, chatRoomName } = route.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        navigation.setOptions({ title: chatRoomName });
      }, [navigation, chatRoomName]);

    useEffect(()=>{
        const reference = database().ref(`${roomId}/messages/`);
        const onValueChange = reference.on('value', snapshot => {
            const messageData = snapshot.val();
            if(messageData){
                const formattedData = Object.keys(messageData).map(key => ({
                    id: key,
                    ...messageData[key],
                }));
                setMessageList(formattedData);
            }
        });
        return () => reference.off('value', onValueChange);
    }, [])

    const toggleVisible = () => {
        setModalVisible(!modalVisible);
      };

    const sendContent = (content) => {
        const userMail = auth().currentUser.email;
        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: new Date().toISOString(),
        }
        database().ref(`${roomId}/messages/`).push(contentObject);
    }
    
    const handleSendContent = (content) => {
        toggleVisible();
        sendContent(content);
    }

    const renderMessages = ({item}) => 
  <ChatRoomCard 
  data={item} 
  />
    
    return(
        <SafeAreaView style={{flex: 1,}} >
            <FlatList 
            data={messageList}
            renderItem={renderMessages}
            />
            <FloatingButton name="plus" onPress={toggleVisible}/>
            <ContentInputModal
            onClose={toggleVisible}
            visible={modalVisible}
            onSend={handleSendContent}
        />
        </SafeAreaView>
    )
}

export default ChatRoom;