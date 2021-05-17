import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexWrap = () => {
  return (
    <View style={style.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => (
        <Text
          key={n}
          style={[style.box, n % 2 === 0 ? style.BgRed : style.BgGreen]}>
          Caja {n}
        </Text>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  box: {
    width: 100,
    height: 100,
  },
  BgRed: {
    backgroundColor: '#ff4d40',
  },
  BgGreen: {
    backgroundColor: '#40ff99',
  },
});
