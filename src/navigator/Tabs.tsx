import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen, Tab2Screen} from '../screens';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/appTheme';
import {Platform, Text} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: 'red',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'play-forward-outline';
              break;

            case 'Tab2Screen':
              iconName = 'battery-half-outline';
              break;

            case 'StackNavigator':
              iconName = 'medkit-outline';
              break;
          }
          return (
            <Text>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: 'red',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color: props.color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
