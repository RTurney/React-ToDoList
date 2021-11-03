import React, { useState } from 'react';
import './App.css';
//Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form inputText={inputText} toDos={toDos} setInputText={setInputText} setToDos={setToDos}/>
      <ToDoList />
    </div>
  );
}

export default App;
