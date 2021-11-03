import React from 'react';
import Todo from './Todo'

const ToDoList = ({ toDos, setToDos }) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list' >
                {toDos.map(todo => (
                    <Todo 
                    text={todo.text} 
                    id={todo.id}
                    completed={todo.completed} 
                    key={todo.id}
                    toDos={toDos}
                    setToDos={setToDos}
                    />
                ))}
            </ul>
        </div>
    )
};

export default ToDoList;