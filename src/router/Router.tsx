import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Product from '../pages/Product';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Homepage" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
