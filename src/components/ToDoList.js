import React from 'react';
import Todo from './Todo'

const ToDoList = ({ toDos }) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list' >
                {toDos.map(todo => (
                    <Todo text={todo.text} id={todo.id} completed={todo.completed}/>
                ))}
            </ul>
        </div>
    )
};

export default ToDoList;