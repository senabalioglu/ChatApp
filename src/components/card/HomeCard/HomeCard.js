import React from "react";
import {View, Text} from 'react-native';
import styles from './HomeCard.styles';

const HomeCard = ({data}) => {
    return(
        <View style={styles.container} >
            <View style={{margin: 10,}} >
            <Text>{data.roomName}</Text>
            </View>
        </View>
    )
}

export default HomeCard;