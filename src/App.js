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
    </div>
  );
}

export default App;
