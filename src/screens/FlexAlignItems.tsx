import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

export const FlexAlignItems = () => {
  const {container, title, box, box1, box2, box3, subcontainer} = style;

  const {height} = useWindowDimensions();

  return (
    <View style={container}>
      <Text style={title}>Align Items</Text>
      <View style={[subcontainer, {height: height - 40}]}>
        <Text style={[box, box1]}>Caja 1</Text>
        <Text style={[box, box2]}>Caja 2</Text>
        <Text style={[box, box3]}>Caja 3</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
  },
  box: {
    width: 80,
    height: 80,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  box1: {
    backgroundColor: '#ff4d40',
  },
  box2: {
    backgroundColor: '#ff9640',
  },
  box3: {
    backgroundColor: '#40ff99',
  },
});
