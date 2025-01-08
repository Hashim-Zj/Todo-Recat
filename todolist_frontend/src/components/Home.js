import React from 'react'
import { Row, Col } from "react-bootstrap";
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Home = ({ createdToday, updatedToday, dueToday }) => {


  const todaysTodo = [
    { todos: dueToday, title: "Due Today" },
    { todos: createdToday, title: "Today's Tasks" },
    { todos: updatedToday, title: "Today's Progress" },
  ];



  return (
    <div>
      <Row>
        <Col sm={4}>
          <AddTodo />
        </Col>
        <Col sm={8}></Col>
      </Row>

      {todaysTodo.map((res,index) => (
        <TodoList key={index} todos={res.todos} title={res.title} />
      ))}


    </div>
  )
}

export default Home