import React from 'react';
import {SafeAreaView} from 'react-native';

//Screens
import {CounterScreen} from './src/screens/CounterScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionsScreen} from './src/screens/DimensionsScreen';
// import {FlexDirectionScreen} from './src/screens/FlexDirectionScreen';
// import {FlexJustifyContent} from './src/screens/FlexJustifyContent';
// import {FlexScreen} from './src/screens/FlexScreen';
// import {HelloWorlScreen} from './src/screens/HelloWorlScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {FlexAlignItems} from './src/screens/FlexAlignItems';
// import {FlexWrap} from './src/screens/FlexWrap';
// import {WorkScreen} from './src/screens/WorkScreen';

const App = () => {
  return (
    //El SafeAreaView se asegura de que
    //la informacion se pueda
    //mostrar en la pantalla, ejemplo: Que no
    //choque con el notch
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorlScreen /> */}
      <CounterScreen />
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <FlexDirectionScreen /> */}
      {/* <FlexJustifyContent /> */}
      {/* <FlexAlignItems /> */}
      {/* <FlexWrap /> */}
      {/* <WorkScreen /> */}
    </SafeAreaView>
  );
};

export default App;
