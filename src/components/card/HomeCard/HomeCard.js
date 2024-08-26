import React from "react";
import {View, Text} from 'react-native';
import styles from './HomeCard.styles';

const HomeCard = ({data}) => {
    return(
        <View style={styles.container} >
            <Text>{data.roomName}</Text>
        </View>
    )
}

export default HomeCard;