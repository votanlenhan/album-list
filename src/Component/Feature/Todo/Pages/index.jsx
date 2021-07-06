import React, { useState } from 'react';
import TodoList from '../Component/TodoList/'
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id:1,
            title: 'Learn React',
            status: 'new'
        },
        {
            id:2,
            title: 'Play LOL',
            status: 'completed'
        },
        {
            id:3,
            title: 'Online',
            status: 'new'
        },

    ];
    
    const [ todoList, setTodoList] = useState(initTodoList);
    const handleTodoClick = (todo, idx) => {
const newTodoList = [...todoList];
//
newTodoList[idx] = {
    ...newTodoList[idx],
    status: newTodoList[idx].status === 'new' ? 'completed' : 'new', 
};
//
setTodoList(newTodoList);

        console.log(todo, idx);
    }
    return (
        <div>
        <h3> Todo List </h3>
            <TodoList todoList = {todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;