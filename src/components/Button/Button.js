import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './Button.styles';

const Button = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <View>
                <Text style={styles.text} >Kişi Ekle</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;