import {Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from './Screens/Home';
import Settings from './Screens/Settings';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from './Screens/Chat';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = createMaterialBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let IconName;

            color = focused ? 'hotpink' : 'white';

            if (route.name == 'Home') {
              IconName = 'greenhouse';
              size = focused ? 25 : 20;
              return (
                <MaterialCommunityIcons
                  name={IconName}
                  color={color}
                  size={size}
                />
              );
            } else if (route.name == 'Chat') {
              IconName = 'chat';
              size = focused ? 25 : 20;
              return (
                <MaterialCommunityIcons
                  name={IconName}
                  color={color}
                  size={size}
                />
              );
            } else if (route.name == 'Settings') {
              IconName = 'gear';
              size = focused ? 25 : 20;
              return <FontAwesome name={IconName} color={color} size={size} />;
            }
          },
        })}
        // for material ui styles
        activeColor="white"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: 'hotpink'}}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Chat" component={Chat} />
        <RootStack.Screen name="Settings" component={Settings} />
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
