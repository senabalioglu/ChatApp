import React from "react";
import { View, TextInput } from 'react-native';
import styles from './Input.styles';

const Input=({placeholder}) => {
    return(
        <View style={styles.container} >
            <TextInput placeholder={placeholder} />
        </View>
    )
}

export default Input;