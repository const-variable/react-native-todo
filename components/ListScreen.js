import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const friends = [
  {name: 'Friend 1'},
  {name: 'Friend 2'},
  {name: 'Friend 3'},
  {name: 'Friend 4'},
  {name: 'Friend 5'},
  {name: 'Friend 6'},
  {name: 'Friend 7'},
  {name: 'Friend 8'},
  {name: 'Friend 9'},
  {name: 'Friend 10'},
  {name: 'Friend 11'},
  {name: 'Friend 12'},
];

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text> List Screen </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={friends}
        renderItem={({item}) => (
          <Text style={styles.textStyle}>{item.name}</Text>
        )}
        keyExtractor={(obj) => obj.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  textStyle: {
    fontSize: 22,
    marginVertical: 30,
  },
});

export default ListScreen;
