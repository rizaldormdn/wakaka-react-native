import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Profile from '../pages/Profile';

const Tabs = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          // bottom: 20,
          // left: 20,
          // right: 20,
          // borderRadius: 15,
        },
      }}>
      <Tabs.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        name="Product"
        component={Product}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tabs.Navigator>
  );
}
