import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {width: dinamicWidth, height: dinamicHeight} = useWindowDimensions();

  return (
    <View>
      <View style={style.container}>
        <View style={style.boxPurple}></View>
        <View style={style.boxOrange}></View>
      </View>
      <Text style={style.title}>Static Dimensions</Text>
      <Text style={style.title}>
        W:{width} H:{height}
      </Text>
      <Text style={style.title}>Dinamic Dimensions</Text>
      <Text style={style.title}>
        W:{dinamicWidth} H:{dinamicHeight}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
  },
  boxPurple: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  boxOrange: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
