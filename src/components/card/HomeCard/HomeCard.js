import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import Button from "../../Button/Button";
import styles from './HomeCard.styles';
import UserListModal from "../../modal/UserListModal/UserListModal";

const HomeCard = ({data}) => {
    console.log(data);
    const [modalVisible, setModalVisible] = useState(false);

    const listUsers = () => {
        setModalVisible(!modalVisible);
    }
    return(
        <TouchableOpacity style={styles.container} >
            <View style={styles.inner_container} >
            <Text>{data.title}</Text>
            <Button onPress={listUsers} />
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