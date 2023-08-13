// components/TodoItem.tsx

import React from 'react';
import { Todo } from '../types/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: () => void;
  onArchive: () => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onArchive, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={onToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      {todo.completed && isHovered && (
        <button onClick={onArchive}>アーカイブ</button>
      )}
    </li>
  );
};

export default TodoItem;
