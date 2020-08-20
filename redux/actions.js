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
