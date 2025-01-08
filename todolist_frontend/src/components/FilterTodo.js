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

  return (
    <div>
      <Row>
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <select
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
            style={{ marginRight: '10px' }}
          >
            <option value="due_date">Due Date</option>
            <option value="created_at">Created Date</option>
            <option value="updated_at">Updated Date</option>
          </select>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            style={{ marginRight: '10px' }}
          />

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
            style={{ marginRight: '10px' }}
          />

          <button type="submit">Filter</button>
        </form>
      </Row>
      <TodoList todos={filteredTodos} title={"Sorted Todos"} />

    </div>
  );
}
export default FilterTodo