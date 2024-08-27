import React, {useState, useEffect} from "react";
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home/Home";
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatRoom from './pages/ChatRoom/ChatRoom';

const Stack = createNativeStackNavigator();

const AuthStack = ({roomTitle}) => {
  return(
    <Stack.Navigator screenOptions={
    {headerShown: false}
    }>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  )
}

function App(){
  const [userSession, setUserSession] = useState();

useEffect(() => {
  auth().onAuthStateChanged((user) => {
    setUserSession(!!user);
  });
}, [])

  return(
    <NavigationContainer>
      <Stack.Navigator>
      {
      !userSession?
      <Stack.Screen options={{headerShown: false}} name="AuthScreen" component={AuthStack}/>
      :
      <Stack.Screen options={{
        headerRight:()=> 
            <Icon 
            name="logout" 
            size={20}
            onPress = {() => auth().signOut()}
            />
      }} name="HomeScreen" component={Home} />
      }
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;