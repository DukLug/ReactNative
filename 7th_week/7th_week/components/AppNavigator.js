
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../components/HomeScreen';
import NotesListScreen from '../components/NotesListScreen';
import NoteDetailScreen from '../components/NoteDetailScreen';

const Stack = createNativeStackNavigator();

export default AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NotesList" component={NotesListScreen} />
      <Stack.Screen name="NoteDetail" component={NoteDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

