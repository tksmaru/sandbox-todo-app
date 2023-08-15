// components/TodoItem.tsx

import React from 'react';
import { Todo } from '../types/todo';

export type TodoItemProps = {
  todo: Todo;
  onToggle: () => void;
  onArchive: () => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onArchive, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex items-center justify-between p-3 bg-white shadow-md rounded mt-2"
    >
      <div className="flex items-center">
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
        </span>
      </div>
      {todo.completed && (
        <button
            onClick={onArchive}
            className={`transition-opacity duration-300 ease-in-out text-sm ${isHovered ? 'opacity-100' : 'opacity-0'} bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md`}
        >
        アーカイブ
        </button>
      )}
    </li>
  );
};
