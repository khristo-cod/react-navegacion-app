import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import { Text, Button, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../themes/AppTheme';


interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title= "Ir a Pag.2"
        onPress={ () => navigation.navigate('Pagina2Screen') }
      />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
        style={{
          ...styles.botonGrande,
          backgroundColor:'#5856D6',
        }}
        onPress={ () => navigation.navigate('PersonaScreen', {
          id:1,
          nombre:'pedro',
        }) }
        >
          <Text style={styles.botonGrandeTexto}> Persona 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.botonGrande}
        onPress={ () => navigation.navigate('PersonaScreen', {
          id:2,
          nombre:'Maria',
        }) }
        >
          <Text style={styles.botonGrandeTexto}> Persona 2</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};
