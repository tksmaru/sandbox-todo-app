// components/TodoInput.tsx

import React, { useState } from 'react';

type TodoInputProps = {
  onAdd: (text: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [newTodoText, setNewTodoText] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  return (
    <input
      type="text"
      value={newTodoText}
      onChange={e => setNewTodoText(e.target.value)}
      onKeyDown={e => {
        if (!isComposing && e.key === 'Enter' && newTodoText.trim()) {
          onAdd(newTodoText.trim());
          setNewTodoText('');
        }
      }}
      onCompositionStart={() => setIsComposing(true)}
      onCompositionEnd={() => setIsComposing(false)}
      placeholder="新しいTODOを入力"
    />
  );
};

export default TodoInput;