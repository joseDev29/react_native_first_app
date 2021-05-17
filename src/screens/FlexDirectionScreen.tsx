import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.columnContainer}>
        <Text style={[style.title, {marginBottom: 5}]}>Column</Text>
        <Text style={[style.box, style.box1]}>Caja 1</Text>
        <Text style={[style.box, style.box2]}>Caja 2</Text>
        <Text style={[style.box, style.box3]}>Caja 3</Text>
      </View>
      <View style={style.rowContainer}>
        <Text style={[style.title, {marginHorizontal: 5}]}>Row</Text>
        <Text style={[style.box, style.box1]}>Caja 1</Text>
        <Text style={[style.box, style.box2]}>Caja 2</Text>
        <Text style={[style.box, style.box3]}>Caja 3</Text>
      </View>
      <View style={style.columnReverseContainer}>
        <Text style={[style.title, {marginTop: 5}]}>Column Reverse</Text>
        <Text style={[style.box, style.box1]}>Caja 1</Text>
        <Text style={[style.box, style.box2]}>Caja 2</Text>
        <Text style={[style.box, style.box3]}>Caja 3</Text>
      </View>
      <View style={style.rowReverseContainer}>
        <Text style={[style.title, {marginHorizontal: 5}]}>Row Reverse</Text>
        <Text style={[style.box, style.box1]}>Caja 1</Text>
        <Text style={[style.box, style.box2]}>Caja 2</Text>
        <Text style={[style.box, style.box3]}>Caja 3</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnContainer: {
    flexDirection: 'column',
  },
  rowContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  columnReverseContainer: {
    marginTop: 10,
    flexDirection: 'column-reverse',
  },
  rowReverseContainer: {
    marginTop: 10,
    flexDirection: 'row-reverse',
  },
  title: {
    fontSize: 20,
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
