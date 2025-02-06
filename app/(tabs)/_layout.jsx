import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man-profile" size={size || 30} color={color || 'black'} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarLabel: 'Add New',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
