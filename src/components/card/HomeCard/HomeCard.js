import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './HomeCard.styles';

const HomeCard = ({data, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <View style={{margin: 10}} >
            <Text>{data.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeCard;