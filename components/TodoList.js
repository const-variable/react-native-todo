import React from 'react';
import {connect} from 'react-redux';
import _get from 'lodash.get';
import _values from 'lodash.values';

import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';

import TaskItem from './TaskItem';
import Separator from './molecules/Separator';
import {deleteTodo, addTodo, toggleTodo} from '../redux/actions';

import Colors from '../config/colors';

class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    const {id, title} = props.route.params;
    this.listId = id;
    this.listTitle = title;
  }

  handleSwipeRight = (todoId) => () => {
    const {deleteTodoAction} = this.props;
    deleteTodoAction(this.listId, todoId);
  };

  handleChange = (text) => {
    this.setState({
      inputText: text,
    });
  };

  handleSubmit = () => {
    const {addTodoAction} = this.props;
    addTodoAction(this.listId, this.state.inputText);
    this.setState({
      inputText: '',
    });
  };

  handleCheckBox = (todoId) => () => {
    const {toggelTodoAction} = this.props;
    toggelTodoAction(this.listId, todoId);
  };

  render() {
    const {inputText} = this.state;
    const {allTodos} = this.props;
    const todos = _values(allTodos[this.listId]);

    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>
            {this.listTitle} {`(${todos.length})`}
          </Text>
          <TextInput
            placeholder="Add Task name here.."
            style={styles.textInput}
            onChangeText={this.handleChange}
            onSubmitEditing={this.handleSubmit}
            value={inputText}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({item}) => {
            return (
              <TaskItem
                task={item}
                handleSwipeRight={this.handleSwipeRight}
                handleCheckBox={this.handleCheckBox}
              />
            );
          }}
          keyExtractor={(task) => task.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.cream,
  },
  title: {
    color: Colors.darkBlue,
    fontWeight: '800',
    fontSize: 26,
  },
  textInput: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 3,
    borderColor: Colors.ligthGrey,
    borderWidth: 1,
    height: 40,
  },
  textStyle: {
    color: Colors.slateBlue,
    fontSize: 22,
    marginVertical: 5,
  },
});

const mapStateToProps = (state) => {
  const todos = _get(state, 'todoReducer.todos');
  return {
    allTodos: todos,
  };
};

export default connect(mapStateToProps, {
  deleteTodoAction: deleteTodo,
  addTodoAction: addTodo,
  toggelTodoAction: toggleTodo,
})(TodoList);
