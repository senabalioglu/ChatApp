import React from "react";
import {View, Text, SafeAreaView, Button} from "react-native";
import Input from "../../components/Input/Input";
import styles from './Login.styles';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
  usermail: '',
  password: '',
}

function Login({navigation}) {

  async function handleFormSubmit (formValues) {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      console.log('basari');
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignUp=()=>{
    navigation.navigate('SignUpScreen');
  }

    return (
      <SafeAreaView style={{flex: 1}} >
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>{({ values, handleChange, handleSubmit }) =>  (
          <> 
          <View style={styles.text_container} > 
          <Text style={styles.text} >login</Text>
          </View>
          <View > 
          <Input 
            onType={handleChange('usermail')} 
            values={values.usermail}
            placeholder="e-postanızı giriniz..."
            />
          <Input 
            onType={handleChange('password')} 
            placeholder="şifrenizi giriniz..." 
            values={values.password}
            isSecure
            />

          <Button onPress={handleSubmit} title="Giriş Yap" />
          <Button onPress={handleSignUp} title="Kayıt Ol" />
        </View>
          </>
        )}
        </Formik>
      </SafeAreaView>
    );
  }
  
export default Login;