import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
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
            <Image 
                style={{width: 50, height: 50}}
                source={require('./images/avatar1.jpeg')} />
                <View style={{flexDirection: 'column'}} >
                <Text style={styles.contactName} >{data.title}</Text>
                <Text >Last seen yesterday</Text>
                </View>        
                <Button onPress={onPress} title='Kişi Ekle' />
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