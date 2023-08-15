import React, { useState } from 'react';
import { TodoInput } from '../components/TodoInput';
import { TodoItem } from '../components/TodoItem';
import { Todo, initialTodos } from '../types/todo';

const IndexPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [hoveredTodoId, setHoveredTodoId] = useState<number | null>(null); // ホバーしているTODOのID

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: text,
      completed: false,
      archived: false
    };
    setTodos([...todos, newTodo]);
  };

  const archiveTodo = (id: number) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, archived: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10 font-sans">
      <h1 className="text-2xl font-bold mb-5">TODO アプリ</h1>
      <TodoInput onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          !todo.archived && (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodo(todo.id)}
              onArchive={() => archiveTodo(todo.id)}
              isHovered={hoveredTodoId === todo.id}
              onMouseEnter={() => setHoveredTodoId(todo.id)}
              onMouseLeave={() => setHoveredTodoId(null)}
            />
          )
        ))}
      </ul>
    </div>
  );
}

export default IndexPage;
