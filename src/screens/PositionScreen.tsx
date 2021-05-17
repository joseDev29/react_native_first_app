import React from 'react';
import {View, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.boxOrange}></View>
      <View style={style.boxPurple}></View>
      <View style={style.boxGreen}></View>
    </View>
  );
};
//El sobreposicionamiento depende del orden en el que se
//definieron los elementos
const style = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  boxPurple: {
    width: 150,
    height: 150,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: '#fff',
    position: 'absolute',
    top: 0,
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: '#fff',
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: '#fff',
    bottom: 180,
  },
});
