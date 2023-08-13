type Todo = {
    id: number;
    text: string;
    completed: boolean;
    archived: boolean;
};
  
const initialTodos: Todo[] = [
    { id: 1, text: 'Next.js の勉強', completed: true, archived: false },
    { id: 2, text: 'TODO アプリを完成させる', completed: false, archived: false  },
];
  
export type { Todo };
export { initialTodos };
