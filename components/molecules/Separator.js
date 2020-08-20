import React from 'react';

import {View, StyleSheet} from 'react-native';

import Colors from '../../config/colors';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    borderColor: Colors.ligthGrey,
    borderBottomWidth: 1,
  },
});

export default Separator;
