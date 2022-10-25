import { useState, useEffect, useRef } from 'react';

export const TodoInput = ({ defaultValue, addTodo }) => {
  const [value, setValue] = useState(defaultValue || '');
  const inputRef = useRef(null);

  const handleChange = (event) => setValue(event.target.value);
  
  const handleClick = () => {
    if (value) {
      addTodo({
        id: parseInt(Math.random() * 10000),
        title: value,
        checked: false
      });
      setValue('');
    }
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  return (
    <div className='TodoInput'>
      <input 
        className='InputField' 
        type='text' 
        placeholder='What to do today...'
        ref={inputRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button 
        className='Button'
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};