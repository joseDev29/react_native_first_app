import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexJustifyContent = () => {
  const {container, title, box, box1, box2, box3, subcontainer} = style;

  return (
    <View style={container}>
      <Text style={title}>Justify Center</Text>
      <View style={[subcontainer, {justifyContent: 'center'}]}>
        <Text style={[box, box1]}>Caja 1</Text>
        <Text style={[box, box2]}>Caja 2</Text>
        <Text style={[box, box3]}>Caja 3</Text>
      </View>
      <Text style={title}>Justify Space Between</Text>
      <View style={[subcontainer, {justifyContent: 'space-between'}]}>
        <Text style={[box, box1]}>Caja 1</Text>
        <Text style={[box, box2]}>Caja 2</Text>
        <Text style={[box, box3]}>Caja 3</Text>
      </View>
      <Text style={title}>Justify Space Evenly</Text>
      <View style={[subcontainer, {justifyContent: 'space-evenly'}]}>
        <Text style={[box, box1]}>Caja 1</Text>
        <Text style={[box, box2]}>Caja 2</Text>
        <Text style={[box, box3]}>Caja 3</Text>
      </View>
      <Text style={title}>Justify Space Around</Text>
      <View style={[subcontainer, {justifyContent: 'space-around'}]}>
        <Text style={[box, box1]}>Caja 1</Text>
        <Text style={[box, box2]}>Caja 2</Text>
        <Text style={[box, box3]}>Caja 3</Text>
      </View>
      <Text style={title}>Justify Flex Start</Text>
      <View style={[subcontainer, {justifyContent: 'flex-start'}]}>
        <Text style={[box, box1]}>Caja 1</Text>
        <Text style={[box, box2]}>Caja 2</Text>
        <Text style={[box, box3]}>Caja 3</Text>
      </View>
      <Text style={title}>Justify Flex End</Text>
      <View style={[subcontainer, {justifyContent: 'flex-end'}]}>
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
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
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
