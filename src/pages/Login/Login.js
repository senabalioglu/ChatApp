import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import Input from '../../components/Input';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, }}>
      <View>
        <Text>Login</Text>
        <Input placeholder="e-posta" />
        <Input placeholder="şifre" />
        <Button title='Kayıt Ol' onPress={null}/>
      </View>
    </SafeAreaView>
  );
};

export default Login;
