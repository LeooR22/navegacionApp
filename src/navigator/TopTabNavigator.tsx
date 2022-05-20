import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ContactsScreen} from '../screens/ContactsScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          //en ios es shadowColor:"transparent"
          elevation: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'Contacts':
              iconName = 'person-circle-outline';
              break;

            case 'Albums':
              iconName = 'images-outline';
              break;
          }
          return (
            <Text>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
          // <Icon name="airplane-outline" size={50} color={colores.primary} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
