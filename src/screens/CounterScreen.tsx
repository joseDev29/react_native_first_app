import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FloatingActionButton} from '../components/FloatingActionButton';

export const CounterScreen = () => {
  //En react native los elementos tiene position relative
  //por defecto

  const [count, setCount] = useState<number>(0);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {count}</Text>

      <FloatingActionButton title="-1" onPress={subtract} />

      <FloatingActionButton title="+1" onPress={add} position="bottom-right" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -10,
  },
});
