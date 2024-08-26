import React from "react";
import { View, TextInput } from 'react-native';
import styles from './SearchBar.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = () => {
    return(
        <View style={styles.container} >
            <View style={styles.inner_container} >
            <TextInput placeholder="Search for messages or users" />
            </View>
        </View>
    )
}

export default SearchBar;