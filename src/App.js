import React from 'react';
import './App.css';
//Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
