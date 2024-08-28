import React, {useState, useEffect} from "react";
import {View, FlatList, Button} from 'react-native';
import database from '@react-native-firebase/database';
import styles from './UserListModal.styles';
import Modal from 'react-native-modal';
import UserCard from "../../card/UserCard/UserCard";

const UserListModal = ({onClose, visible, roomId}) => {
  //console.log(roomId);
    const [usersList, setUsersList] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});

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
        const initialCheckedItems = filteredData.reduce((acc, user) => {
          acc[user.id] = false;
          return acc;
        }, {});
        setCheckedItems(initialCheckedItems);
      } else {
        setUsersList([]);
      }
    });

    return () => reference.off('value', onValueChange);
  }, []);


  const handleCheckToggle = (userId) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [userId]: !prevState[userId]
    }));
  };
  

  const renderUser = ({item}) => (
    <UserCard
    showCheckbox={true}
    check={checkedItems[item.id]}
    onCheckToggle={() => handleCheckToggle(item.id)}
    onPress={null}
      data={item}
    />
  );

  const handleIdSend = () => {
    const selectedIds = Object.keys(checkedItems).filter(userId => checkedItems[userId]);
    const chatUsersRef = database().ref(`chatRooms/${roomId}/chatUsers`);

    chatUsersRef.once('value', snapshot => {
      const currentUserList = snapshot.val() || [];
      const updatedUserList = [...currentUserList, selectedIds];

      chatUsersRef.set(updatedUserList);
    });

  }

    return(
        <Modal
        style={styles.modal}
        isVisible={visible}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        >
        <View style={styles.container} >
        <View>
        <FlatList
            data={usersList}
            renderItem={renderUser}
            keyExtractor={item => item.id}
          /> 
        </View> 
        </View> 
        <Button title="Gönder" onPress={handleIdSend} />
        </Modal>
    )
}

export default UserListModal;