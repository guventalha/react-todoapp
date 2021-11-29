import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='text'
        placeholder='Add Todo'
        value={input}
        className='todo-input edit'
        onChange={changeHandler}
        ref={inputRef}
      />
      <button className='todo-button edit'>Add</button>
    </form>
  );
}

export default TodoForm;
