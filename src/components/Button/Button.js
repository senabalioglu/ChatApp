import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './Button.styles';

const Button = ({onPress, title, theme="primary" }) => {
    return(
        <TouchableOpacity  onPress={onPress} style={styles[theme].container} >
            <View>
                <Text style={styles[theme].text} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;