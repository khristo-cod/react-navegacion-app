import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import { Text, Button, View } from 'react-native';
import { styles } from '../themes/AppTheme';


interface Props extends StackScreenProps<any, any>{}

export const Pagina2Screen = ({ navigation }: Props) => {

  return (
    <View style={ styles.globalMargin}>
        <Text style={styles.title}>Pagina2Screen</Text>

        <Button
          title= "Ir a Pag.3"
          onPress={ () => navigation.navigate('Pagina3Screen') }
        />
    </View>
  );
};
