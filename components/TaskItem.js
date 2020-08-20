/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../config/colors';

const RightActions = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rightAction}>
      <Text style={[styles.rightActionText]}>Delete</Text>
    </TouchableOpacity>
  );
};

const TaskItem = (props) => {
  const {task, handleSwipeRight, handleCheckBox} = props;
  const {title, id, isCompleted} = task;
  return (
    <Swipeable
      renderRightActions={() => (
        <RightActions onPress={handleSwipeRight(id)} />
      )}>
      <View style={styles.taskItemContainer}>
        <CheckBox
          disabled={false}
          style={styles.checkBox}
          value={isCompleted}
          onValueChange={handleCheckBox(id)}
        />
        <Text
          style={[
            styles.textStyle,
            {textDecorationLine: isCompleted ? 'line-through' : 'none'},
          ]}>
          {title}
        </Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  taskItemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.cream,
  },
  checkBox: {
    marginHorizontal: 2,
    fontSize: 12,
  },
  textStyle: {
    marginLeft: 5,
    color: Colors.darkBlue,
    fontSize: 22,
  },
  rightAction: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: Colors.red,
    padding: 10,
  },
  rightActionText: {
    color: Colors.white,
    fontSize: 22,
  },
});

export default TaskItem;
