import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className='TodoList'>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          id={todo.id}
          title={todo.title} 
          completed={todo.completed}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};
