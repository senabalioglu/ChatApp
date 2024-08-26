import React from "react";
import { View, TextInput } from 'react-native';
import styles from './Input.styles';

const Input=({placeholder, onType, values}) => {
    return(
        <View style={styles.container} >
            <TextInput 
            placeholder={placeholder}
            onChangeText={onType}
            value={values}
            />
        </View>
    )
}

export default Input;