import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './UserCard.styles';
import { CheckBox } from 'react-native-elements';

const UserCard = ({data, onPress, showCheckbox, check, onCheckToggle }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.item_container} >
        {showCheckbox && (
          <CheckBox
            //checked={isChecked}
            //onPress={() => onCheckboxToggle(user.id)}
            center
            checked={check}
            onPress={onCheckToggle}
          />
        )}
        <Text>{data.id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
