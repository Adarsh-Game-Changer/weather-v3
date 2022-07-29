import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Surat  from './screens/Surat';
import HomeScreen from "./screens/Home";
import Ahmedabad from './screens/Ahmedabad';
const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions={{headerShown:false
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Surat" component={Surat}/>
    <Stack.Screen name="Ahmedabad" component={Ahmedabad} />
    </Stack.Navigator>
    
    
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
