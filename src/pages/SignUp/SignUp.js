import React from "react";
import {View, Text, SafeAreaView, Button} from "react-native";
import Input from "../../components/Input/Input";
import styles from './SignUp.styles';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
}

function SignUp({navigation}) {

  async function handleFormSubmit (formValues) {
    try {
      if(formValues.password !== formValues.repassword){
        console.log('hata');
        return;
    }
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      const user = auth().currentUser;

      if (user) {
        await database().ref(`users/${user.uid}`).set({
          name: '',
          surname: '',
          age: '',
          profile_url: '',
          chatList: [],
        });
      }
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignUp=()=>{
    navigation.goBack();
  }

    return (
      <SafeAreaView style={{flex: 1}} >
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>{({ values, handleChange, handleSubmit }) =>  (
          <> 
          <View style={styles.text_container} > 
          <Text style={styles.text} >signup</Text>
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
            />

           <Input 
            onType={handleChange('repassword')} 
            placeholder="şifrenizi tekrar giriniz..." 
            values={values.repassword}
            />

          <Button onPress={handleSubmit} title="Kayıt Ol" />
          <Button onPress={handleSignUp} title="Geri" />
        </View>
          </>
        )}
        </Formik>
      </SafeAreaView>
    );
  }
  
export default SignUp;