import React, { useState, useEffect } from 'react';
import './App.css';
//Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [status, setStatus] = useState('all');
  

  useEffect(() => {
    filterHandler();
  }, [toDos, status]);

  const filterHandler =() => {
    switch(status){
      case 'completed':
        setFilteredToDos(toDos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredToDos(toDos)
        break;
    }
  };

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
      <ToDoList 
      toDos={toDos} 
      setToDos={setToDos} 
      filteredToDos={filteredToDos}/>
    </div>
  );
}

export default App;
