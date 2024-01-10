import React, { useContext , useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
        const [title, setTitle] = useState('');
        const [todos , setTodos] = useContext(TodoContext);

        const addtodo =(e) =>{
            e.preventDefault();
            if('' === title || undefined === title){
                alert('Field can not be blank');
                return;
        }
        
        const newTodos =[...todos , {id:uuidv4(), title:title, complete:false}];
        setTodos(newTodos);
        setTitle('');
    }

    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos));
    } , [todos])
    
  return (
    <>
    <div>
        <input value={title}  placeholder="Add Todo"  onChange={e => setTitle(e.target.value)} className='form-input'/>
        <button type="button" onClick={addtodo} className='form-btn'>Add</button>
    </div>
     
    </>
  )
}

export default AddTodo
