import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import ListScreen from './components/ListScreen';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ListScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
});

export default App;
