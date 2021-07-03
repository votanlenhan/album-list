import React from 'react';
import TodoList from '../Component/TodoList/'
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id:1,
            title: 'Learn React',
            status: 'new'
        },
        {
            id:2,
            title: 'Play LOL',
            status: 'new'
        },
        {
            id:3,
            title: 'Online',
            status: 'new'
        },

    ];
    
    
    return (
        <div>
            <TodoList todoList = {todoList}/>
        </div>
    );
}

export default TodoFeature;