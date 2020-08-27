import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  // firstName: '',
  // lastName: '',
  userName: '',
  isSignout: true,
  userToken: null,
  isLoading: false,
  lists: [
    {
      id: 'list1',
      title: 'Home related todos',
    },
    {
      id: 'list2',
      title: 'Office tasks',
    },
  ],
  todos: {
    list1: {
      L1T1: {
        id: 'L1T1',
        title: 'Clear the laundry',
        isCompleted: true,
      },
      L1T2: {
        id: 'L1T2',
        title: 'Feed the dog',
        isCompleted: false,
      },
    },
    list2: {},
  },
};

const getId = () => (Math.random() * 1000).toString();

const todoReducer = createReducer(initialState, {
  ADD_LIST: (state, action) => {
    const {lists, todos} = state;
    const id = getId();
    lists.push({
      id: id,
      title: action.payload,
    });

    todos[id] = {};
  },
  DELETE_TODO: (state, action) => {
    const {todos} = state;
    const {listId, todoId} = action.payload;
    delete todos[listId][todoId];
  },
  ADD_TODO: (state, action) => {
    const {todos} = state;
    const todoId = getId();
    const {listId, title} = action.payload;
    todos[listId][todoId] = {id: todoId, title: title, isCompleted: false};
  },
  TOGGLE_TODO: (state, action) => {
    const {todos} = state;
    const {listId, todoId} = action.payload;

    const targettedTodo = todos[listId][todoId];
    targettedTodo.isCompleted = !targettedTodo.isCompleted;
  },
  SIGN_IN: (state, action) => {
    state.isSignout = false;
    const {userToken, userName} = action.payload;
    state.userToken = userToken;
    state.userName = userName;
  },
  SIGN_UP: (state, action) => {
    state.isSignout = false;
    const {userToken, userName, firstName, lastName} = action.payload;
    console.log(action.payload);
    state.userToken = userToken;
    state.userName = userName;
    state.firstName = firstName;
    state.lastName = lastName;
  },
  SIGN_OUT: (state) => {
    state.isSignout = true;
    state.userToken = null;
  },
});

export default combineReducers({
  todoReducer,
});
