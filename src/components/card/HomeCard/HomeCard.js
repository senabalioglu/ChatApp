import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import Button from "../../Button/Button";
import styles from './HomeCard.styles';
import UserListModal from "../../modal/UserListModal/UserListModal";

const HomeCard = ({data, onPress}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const listUsers = () => {
        setModalVisible(!modalVisible);
    }
    return(
        <TouchableOpacity onPress={onPress} style={styles.contactItem} >
            <View style={styles.inner_container} >
            <Text style={styles.contactName} >{data.title}</Text>
            <Button title="Kişi Ekle" onPress={listUsers} />
            <UserListModal
            visible={modalVisible}
            onClose={listUsers}
            roomId={data.id}
            />
            </View>
        </TouchableOpacity>
    )
}

export default HomeCard;