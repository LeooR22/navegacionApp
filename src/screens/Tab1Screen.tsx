import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {useEffect} from 'react';
import {styles, colores} from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={50} color={colores.primary} />;
        <Icon name="attach-outline" size={50} color={colores.primary} />;
        <Icon name="bonfire-outline" size={50} color={colores.primary} />;
        <Icon name="calculator-outline" size={50} color={colores.primary} />;
        <Icon name="chatbubble-outline" size={50} color={colores.primary} />;
        <Icon name="images-outline" size={50} color={colores.primary} />;
        <Icon name="leaf-outline" size={50} color={colores.primary} />;
        <Icon name="rocket-outline" size={50} color={colores.primary} />;
      </Text>
    </View>
  );
};
