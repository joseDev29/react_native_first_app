import React from 'react';
import {StyleSheet, View} from 'react-native';

export const WorkScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box, style.boxPurple]}></View>
      <View style={[style.box, style.boxOrange]}></View>
      <View style={[style.box, style.boxBlue]}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
  },
  boxPurple: {
    backgroundColor: '#5856d6',
    right: 100,
    top: 50,
  },
  boxOrange: {
    backgroundColor: '#f0a23b',
  },
  boxBlue: {
    backgroundColor: 'blue',
    left: 100,
    bottom: 150,
  },
});
