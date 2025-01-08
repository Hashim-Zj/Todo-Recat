import React from 'react';
import TodoList from './TodoList';

const TaskList = ({ todos }) => {


  const reversedTodos = [...todos].reverse();


  return (
    <div>
      <TodoList todos={reversedTodos} title={"All your Todos"} />
    </div>
  );
};

export default TaskList;
