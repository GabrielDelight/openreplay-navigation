import {Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './Screens/Home';
import Settings from './Screens/Settings';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from './Screens/Chat';

const RootStack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#bbb',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'normal',
          },
        }}>
        <RootStack.Screen
          name="BottomTabs"
          options={{
            header: () => null,
            title: 'Home',
          }}
          component={BottomTabs}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          return (
            <Text>
              {route.name === 'Home' && (
                <Foundation name={'home'} color={color} size={24} />
              )}
              {route.name === 'Chat' && (
                <MaterialCommunityIcons name={'chat'} color={color} size={24} />
              )}

              {route.name === 'Settings' && (
                <FontAwesome name={'gear'} color={color} size={24} />
              )}
            </Text>
          );
        },

        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#bbb',
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
        tabBarLabelStyle: {fontSize: 12},
        header: () => false,
      })}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Chat" component={Chat} />

      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
};
