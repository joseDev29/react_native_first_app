import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={style.container}>
      <Text style={[style.box, style.box1]}>Caja 1</Text>
      <Text style={[style.box, style.box2]}>Caja 2</Text>
      <Text style={[style.box, style.box3]}>Caja 3</Text>
    </View>
  );
};

//Si todos los elementos tienen la propiedad flex,
//El 100% sera la suma de las unidades definidas en los flex
//Y la repaticion se hara en base al porcentaje respectivo dependiendo de
//la unidad asignada a la propiedad flex
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  box1: {
    flex: 1,
    backgroundColor: '#ff4d40',
  },
  box2: {
    flex: 2,
    backgroundColor: '#ff9640',
  },
  box3: {
    flex: 3,
    backgroundColor: '#40ff99',
  },
});
