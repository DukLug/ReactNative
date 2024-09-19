import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductDetailScreen from './components/ProductDetailScreen';
import ColorSelectionScreen from './components/ColorSelectionScreen';  // Import mới

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductDetail">
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="ColorSelection" component={ColorSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
