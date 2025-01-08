import React from 'react'
import { Row } from "react-bootstrap"
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

const TodoList = ({ todos, title }) => {


  const formatDate = (dateString) => {
    const [date] = dateString.split("T");
    return date.replace(/-/g, "/");
  };



  const getTodoStyles = (status) => {
    let cardStyle = {};
    let titleStyle = {};

    if (status === "Pending") {
      cardStyle = { backgroundColor: "#ffe5e5" };
      titleStyle = { color: "red" };
    } else if (status === "In Progress") {
      cardStyle = { backgroundColor: "#fff4e6" };
      titleStyle = { color: "orange" };
    } else if (status === "Completed") {
      cardStyle = { backgroundColor: "#e6ffe6" };
      titleStyle = { color: "green" };
    }

    return { cardStyle, titleStyle };
  };

  return (
    <div>
      <Row>
        {todos.length > 0 ? (
          <div className="w-75 m-auto">
            <h4>{title}</h4>
            {todos.map((todo) => {
              const { cardStyle, titleStyle } = getTodoStyles(todo.status);

              return (
                <div className="card mb-1" style={cardStyle} key={todo.id}>
                  <div className="card-header d-flex justify-content-between">
                    <span>{todo.status}</span>
                    <span className="d-flex justify-content-between">
                      <EditTodo id={todo.id} />
                      <DeleteTodo id={todo.id} />
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" style={titleStyle}>
                      {todo.title}
                    </h5>
                    <p className="card-text">{todo.description}</p>
                    <div className="d-flex justify-content-evenly">
                      <span className="card-text">
                        <strong>Created At:</strong> {formatDate(todo.created_at)}
                      </span>
                      {todo.status === "Completed" ? (
                        <span className="card-text">
                          <strong>Completed At:</strong> {formatDate(todo.updated_at)}
                        </span>
                      ) : (
                        <span className="card-text">
                          <strong>Updated At:</strong> {formatDate(todo.updated_at)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            </>
        )}
      </Row>
    </div>
  )
}

export default TodoList