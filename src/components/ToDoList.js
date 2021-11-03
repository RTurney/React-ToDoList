import React from 'react';
import Todo from './Todo'

const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
    // console.log(toDos);
    // console.log(filteredToDos);

    return (
        <div className='todo-container'>
            <ul className='todo-list' >
                {filteredToDos.map(todo => (
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