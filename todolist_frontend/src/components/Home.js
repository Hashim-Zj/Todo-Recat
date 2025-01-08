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
      <Row className="align-items-center mb-4">
        <Col sm={8} className="text-end">
          <span className="fs-3">
            Add Your Now Todos Here:
          </span>
        </Col>
        <Col sm={4} className="text-start">
          <AddTodo />
        </Col>
      </Row>




      {todaysTodo.map((res, index) => (
        <TodoList key={index} todos={res.todos} title={res.title} />
      ))}


    </div>
  )
}

export default Home