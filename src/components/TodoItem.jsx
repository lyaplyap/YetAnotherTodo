import { useState } from 'react';
import { ReactComponent as IconClose } from '../assets/close.svg';

export const TodoItem = ({ id, title, completed, removeTodo }) => {
  const [checked, setChecked] = useState(completed || false);
  const handleChange = () => setChecked(!checked);

  return (
    <div className='TodoItem'>
      <input
        className='TodoCheckbox'
        type='checkbox' 
        checked={checked}
        onChange={handleChange}
      />
      <label 
        className='TodoTitle'
        style={{ 
          textDecoration: checked ? 'line-through' : '', 
          textDecorationThickness: 2 
        }}
      >
        {title}
      </label>
      <span className='DeleteButton' onClick={() => removeTodo(id)}>
        <IconClose
          width={16} 
          height={16}
        />
      </span>
    </div>
  );
};
