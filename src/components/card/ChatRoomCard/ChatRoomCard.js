import React from "react";
import {View, Text} from 'react-native';
import styles from './ChatRoomCard.styles';

const ChatRoomCard = ({data}) => {
    return(
        <View style={styles.container} >
            <View style={styles.inner_container} >
            <Text>{data.username}</Text>
            <Text>{data.date}</Text>
            </View>
            <Text style={styles.message_text} >{data.text}</Text>
        </View>
    )
}

export default ChatRoomCard;