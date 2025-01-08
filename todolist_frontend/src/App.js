import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import Home from './components/Home';
import TaskList from './components/TaskList';
import AddTodo from './components/AddTodo';
import { listTodo } from './Apis/feachApi';
import FilterTodo from './components/FilterTodo';


function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    listTodo().then((res) => {
      console.log(res.data);
      setTodos(res.data)
    })
      .catch(error => console.error(error));
  }, []);
  console.log(todos);


  // get date of today
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const todayDate = getTodayDate();

  // Separate lists for todos created, updated, or due today
  const createdToday = todos.filter((todo) => todo.created_at.split("T")[0] === todayDate);
  const updatedToday = todos.filter((todo) => todo.updated_at.split("T")[0] === todayDate);
  const dueToday = todos.filter((todo) => todo.due_date === todayDate);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home createdToday={createdToday} updatedToday={updatedToday} dueToday={dueToday} />} />
        <Route path='/my_todos' element={<TaskList todos={todos}/>} />
        <Route path='/add_new' element={<AddTodo />} />
        <Route path='/filter' element={<FilterTodo todos={todos} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
