import React from 'react';
import { func, bool, string } from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: func.isRequired,
  completed: bool.isRequired,
  text: string.isRequired,
};

export default Todo;
