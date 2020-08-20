import React from 'react';

import {Text, StyleSheet, SafeAreaView} from 'react-native';

const Settings = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headerText}> Settings Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
  },
});

export default Settings;
