import { useState } from 'react';

// TODO アイテムの型定義
type Todo = {
  id: number;
  text: string;
  completed: boolean;  // 追加
  archived: boolean;
};

// 初期の TODO データ
const initialTodos: Todo[] = [
  { id: 1, text: 'Next.js の勉強', completed: true, archived: false },
  { id: 2, text: 'TODO アプリを完成させる', completed: false, archived: false  },
];

const IndexPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodoText, setNewTodoText] = useState('');
  const [isComposing, setIsComposing] = useState(false); // IMEの変換中かどうかを示す状態
  const [hoveredTodoId, setHoveredTodoId] = useState<number | null>(null); // ホバーしているTODOのID

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = () => {
    // 入力が空の場合は追加しない
    if (newTodoText.trim() === '') return;

    const newTodo: Todo = {
      id: todos.length + 1, // 仮のID。実際にはユニークな値を生成する必要があります。
      text: newTodoText,
      completed: false,
      archived: false
    };
    setTodos([...todos, newTodo]);
    setNewTodoText(''); // 入力値をリセット
  };

  const archiveTodo = (id: number) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, archived: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TODO アプリ</h1>
      <input
        type="text"
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
        onKeyDown={e => {
          if (!isComposing && e.key === 'Enter') {
            addTodo();
          }
        }}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        placeholder="新しいTODOを入力"
      />
      <ul>
      {todos.map((todo) => (
        !todo.archived && (
          <li 
            key={todo.id}
            onMouseEnter={() => setHoveredTodoId(todo.id)}
            onMouseLeave={() => setHoveredTodoId(null)}
          >
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            {todo.completed && hoveredTodoId === todo.id && (
              <button onClick={() => archiveTodo(todo.id)}>アーカイブ</button>
            )}
          </li>
        )
      ))}
      </ul>
    </div>
  );
}

export default IndexPage;
