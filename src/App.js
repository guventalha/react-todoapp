import React, { useState } from 'react';
import './app.css';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;
