export const addList = (listName) => {
  return {
    type: 'ADD_LIST',
    payload: listName,
  };
};

export const deleteTodo = (listId, todoId) => {
  return {
    type: 'DELETE_TODO',
    payload: {listId, todoId},
  };
};

export const addTodo = (listId, title) => {
  return {
    type: 'ADD_TODO',
    payload: {listId, title},
  };
};

export const toggleTodo = (listId, todoId) => {
  return {
    type: 'TOGGLE_TODO',
    payload: {listId, todoId},
  };
};

export const signIn = (userName, password) => {
  //authenticate userName and password and generate userToken,
  const userToken = '4ba56-uV32-23131';
  return {
    type: 'SIGN_IN',
    payload: {userToken, userName},
  };
};

export const signUp = (firstName, lastName, userName, password) => {
  const userToken = '4ba56-uV32-23131';
  return {
    type: 'SIGN_UP',
    payload: {userToken, userName, firstName, lastName},
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};
