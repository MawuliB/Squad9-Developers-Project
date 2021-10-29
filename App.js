import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import HomeScreen from './app/screens/HomeScreen'
import AboutScreen from './app/screens/AboutScreen';
import Contact from './app/screens/Contact';
import Message from './app/screens/Message';
import FAQ from './app/screens/FAQ';
import Gallery from './app/screens/Gallery';
import Services from './app/screens/Services';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="About" component={AboutScreen} options={{headerShown: false}} />
      <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}} />
      <Stack.Screen name="Message" component={Message} options={{headerShown: false}} />
      <Stack.Screen name="FAQ" component={FAQ} options={{headerShown: false}} />
      <Stack.Screen name="Gallery" component={Gallery} options={{headerShown: false}} />
      <Stack.Screen name="Services" component={Services} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

