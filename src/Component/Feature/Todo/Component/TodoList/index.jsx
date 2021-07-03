import React from 'react';


TodoList.propTypes = {
    
};

TodoList.defaultProps = {
    todoList: [],
};
function TodoList({todoList}) {
    return (
        <ul>
           {todoList.map(todo => (
               <li key={todo.id}>{todo.title}</li>
           ))} 
        </ul>
    );
}

export default TodoList; 