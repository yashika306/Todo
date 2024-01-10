 
import { React } from 'react';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import {TodoProvider} from "./context/TodoContext";
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1 className='app-title'>Todo Application</h1>
        <AddTodo/>
        <TodoList/>
      </div>
    </TodoProvider>
  );
}

export default App;
