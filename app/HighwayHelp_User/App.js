import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, Linking, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'



export default function App() {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    //SplashScreen.hide();
  }, [])



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}