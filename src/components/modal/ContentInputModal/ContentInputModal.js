import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import styles from './ContentInputModal.styles';
import Button from '../../Button/Button';

const ContentInputModal = ({onClose, visible, onSend}) => {
  const [text, setText] = useState();

  function handleSend() {
    if(!text){
        return;
    }
    onSend(text),
    setText('');
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View>
          <TextInput 
          placeholder="oda adı" 
          onChangeText={setText}
          value={text}
          multiline
          />
        </View>
      </View>
      <Button onPress={handleSend} title='Gönder' />
    </Modal>
  );
};

export default ContentInputModal;
