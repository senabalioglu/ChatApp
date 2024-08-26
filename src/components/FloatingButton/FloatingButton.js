import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import styles from './FloatingButton.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = ({onPress, name}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <Icon name={name} color='white' size={30} />
        </TouchableOpacity>
    )
}

export default FloatingButton;