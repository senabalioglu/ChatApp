import React from "react";
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;