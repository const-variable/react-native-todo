import 'react-native-gesture-handler';

import React from 'react';
import Auth from './components/Auth/Auth';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default App;
