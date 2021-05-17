import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Box Object Model</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    padding: 50,
    width: 250,
    marginHorizontal: 'auto',
    fontSize: 20,
    borderWidth: 10,
  },
});
