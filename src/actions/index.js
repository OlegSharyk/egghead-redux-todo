import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter,
  });

  return api.fetchTodos(filter).then(
    response => {
      // console.log(
      //   'normilized response',
      //   normalize(response, schema.arrayOfTodos)
      // );
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong',
      });
    }
  );
};

export const addTodo = text => dispatch =>
  api.addTodo(text).then(response => {
    // console.log('normilized response', normalize(response, schema.todo));
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response,
    });
  });

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
