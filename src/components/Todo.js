import React from "react";

const Todo = ({text, id, completed}) => {
    return (
        <div className='todo'>
            <li id={id} className='todo-item'>{text}</li>
            <button className="complete-btn">
                <i className='fas fa-check'></i>
            </button>
            <button className="trash-btn">
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};

export default Todo; 