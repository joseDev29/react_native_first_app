import React, {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';

interface props {
  title: string;
  onPress: () => void;
  position?: 'bottom-right' | 'bottom-left';
}

export const FloatingActionButton = ({
  title,
  onPress,
  position,
}: PropsWithChildren<props>) => {
  const positionCondition =
    position === 'bottom-right' ? style.right : style.left;

  const ios = () => {
    return (
      <TouchableOpacity
        //Valores entre 0 y 1
        activeOpacity={0.75}
        style={[style.fabLocation, positionCondition]}
        onPress={onPress}>
        <View style={style.fab}>
          <Text style={style.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View style={[style.fabLocation, positionCondition]}>
        <TouchableNativeFeedback
          onPress={onPress}
          //solucion para los errores en los bordes aunque solo
          //funciona en android
          background={TouchableNativeFeedback.Ripple('#d6002c', false, 30)}>
          <View style={style.fab}>
            <Text style={style.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

const style = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: '#ff335c',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 8,
  },
  fabText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
