import React, { useState } from 'react';
import './app.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const clickHandler = () => {
    if (todo.length !== 0) {
      const newTodos = [...todos, todo];
      setTodos(newTodos);
      setTodo('');
    }
  };

  const deleteTodo = () => {
    todos.filter((todo) => !todo.includes(todo));
  };
  return (
    <div className='App'>
      <div className='entry'>
        <input
          value={todo}
          type='text'
          name='todo'
          id='todo'
          onChange={changeHandler}
        />
        <button className='add-btn' onClick={clickHandler}>
          Add Todo
        </button>
      </div>
      <div className='todos'>
        {todos.map((todo) => {
          return (
            <div key='2' className='todo-item'>
              {todo}
              <button onClick={deleteTodo}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
