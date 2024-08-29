import React from "react";
import {View, Text} from 'react-native';
import styles from './ChatRoomCard.styles';
import auth from '@react-native-firebase/auth';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from "date-fns/locale";

const ChatRoomCard = ({data}) => {
    const formattedDate = formatDistance(parseISO(data.date), new Date(), {
        addSuffix: true,
        locale: tr,
    });
    
    const currentUserId = auth().currentUser.uid;
    const theme = data.userId === currentUserId ? "primary":"secondary"  ;

    return(
        <View style={styles[theme].container} >
            <View style={styles[theme].inner_container} >
            <Text style={styles[theme].username_text} >{data.username}</Text>
            <Text style={styles[theme].date_text} >{formattedDate}</Text>
            </View>
            <Text style={styles[theme].message_text} >{data.text}</Text>
        </View>
    )
}

export default ChatRoomCard;