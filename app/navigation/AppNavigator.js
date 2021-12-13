import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Songs"
      activeColor="cyan"
      inactiveColor="white"
      barStyle={{ backgroundColor: 'black' }}>
      <Tab.Screen
        name='Songs'
        color= 'yellow'
        component={AudioList}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name='headset' size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Player'
        component={Player}
        options={{
          tabBarIcon: ({ color}) => (
            <FontAwesome5 name='compact-disc' size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;