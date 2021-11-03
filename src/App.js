import React, { useState } from 'react';
import './App.css';
//Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState('All');

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        toDos={toDos}
        setInputText={setInputText} 
        setToDos={setToDos}
        setStatus={setStatus}
      />
      <ToDoList toDos={toDos} setToDos={setToDos}/>
    </div>
  );
}

export default App;
