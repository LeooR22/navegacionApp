import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina3Screen: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 3 Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />

      <Button title="Ir a la pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
