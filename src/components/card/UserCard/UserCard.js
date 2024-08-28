import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './UserCard.styles';

const UserCard = ({data, onPress}) => {
    console.log(data);
    return(
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <View style={{ flexDirection:'column', margin: 10}} >
            <Text>{data.id}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UserCard;