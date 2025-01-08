import React, { useState } from "react";
import { Row } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TodoList from "./TodoList";

const FilterTodo = ({ todos }) => {

  const [dateField, setDateField] = useState('due_date');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = todos.filter((todo) => {
      const todoDate = new Date(todo[dateField]);
      return (
        (!startDate || todoDate >= startDate) &&
        (!endDate || todoDate <= endDate)
      );
    });
    setFilteredTodos(filtered);

  };
  const style = {
    select: {
      marginRight: '10px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
    }
  }


  return (
    <div>
      <Row>
        <div className="d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} className="d-flex justify-content-between p-4 bg-white rounded shadow-sm">

            <select className="form-group mr-3"style={style.select}
              value={dateField}
              onChange={(e) => setDateField(e.target.value)}
            >
              <option value="due_date">Due Date</option>
              <option value="created_at">Created Date</option>
              <option value="updated_at">Updated Date</option>
            </select>
{/* 
            <div className="form-group col-md-4">
              <label htmlFor="dateField">Date Field</label>
              <select
                id="dateField"
                value={dateField}
                onChange={(e) => setDateField(e.target.value)}
                className="form-control"
              >
                <option value="due_date">Due Date</option>
                <option value="created_at">Created Date</option>
                <option value="updated_at">Updated Date</option>
              </select>
            </div> */}

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="mx-2"
            />

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="End Date"
            />

            <button className="btn btn-info py-1 ms-2" type="submit" >Filter</button>
          </form>
        </div>
      </Row>
      <TodoList todos={filteredTodos} title={"Sorted Todos"} />

    </div>
  );
}
export default FilterTodo