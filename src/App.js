import React, { useState, useEffect } from 'react';
import './App.css';
//Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  //state variables 
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [status, setStatus] = useState('all');
  
  // run once upon refresh/load
  useEffect(() => {
    getToDos();
  }, [])

// run each time todos or status is changed 
  useEffect(() => {
    filterHandler();
    saveToDos();
  }, [toDos, status]);

// filter tasks 
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

  //save to local 
  const saveToDos = () => {
      localStorage.setItem('toDos', JSON.stringify(toDos))
  };
  //get saved todos 
  const getToDos = () => {
    if(localStorage.getItem('toDos') === null ){
      saveToDos();
    } else {
      let localToDos = JSON.parse(localStorage.getItem('toDos', JSON.stringify(toDos)));
      setToDos(localToDos);
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
