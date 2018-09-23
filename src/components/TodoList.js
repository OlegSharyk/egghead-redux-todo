import React from 'react';
import { arrayOf, shape, bool, string, func } from 'prop-types';
import Todo from './Todo';
import { fetchTodos } from '../api';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {console.log(todos)}
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: arrayOf(
    shape({
      id: string.isRequired,
      completed: bool.isRequired,
      text: string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: func.isRequired,
};

export default TodoList;
