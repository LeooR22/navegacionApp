// import 'react-native-gesture-handler';
import * as React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        // drawerPosition: 'right',
        drawerType: `${width >= 768 ? 'permanent' : 'front'}`,
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="Tabs"
        // options={{title: 'Home'}}
        component={Tabs}
      />
      <Drawer.Screen
        name="SettingsScreen"
        // options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu  */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name={'medical-outline'} size={20} color={'black'} />
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name={'mic-circle-outline'} size={30} color={'black'} />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
