import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcbff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: 'blue', fontSize: 30},
});

export const HelloWorlScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello World</Text>
    </View>
  );
};
