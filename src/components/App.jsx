import { useState, useEffect } from 'react';
import { TodoHeader } from './TodoHeader';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => setTodos((todos) => [...todos, todo]);
  const removeTodo = (todoId) => setTodos((todos) => todos.filter((todo) => todo.id !== todoId));

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((todos) => setTodos(todos.slice(0, 3)));
  }, []);

  return (
    <div className='App'>
      <div className='Todo'>
        <TodoHeader/>
        <TodoInput addTodo={addTodo}/>
        {Boolean(todos.length) && (
          <TodoList todos={todos} removeTodo={removeTodo}/>
        )}
      </div>
    </div>
  );
};
