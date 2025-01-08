import React, { useState } from 'react'
import { addTodo } from '../Apis/feachApi'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function AddTodo() {
  const [todos, setTodos] = useState({
    title: "",
    description: "",
    due_date: ""
  })
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formSubmit = () => {
    const { title, description, due_date } = todos

    if (!title || !description || !due_date) {
      toast.warning("Please fill the datas")
    } else {
      addTodo(todos).then((res) => {
        console.log(res.data);
        toast.success("Todo Added")
        handleClose();
        navigate("/")
      })
    }

  }

  return (
    <div>

      <button className="btn btn-success m-3" onClick={handleShow}>
        Add ToDo
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className=''>Add New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        

          <div className="p-4 rounded shadow-lg bg-light">
            <FloatingLabel
              controlId="floatingtitle"
              label="Title"
              className="mb-4"
            >
              <Form.Control
                type="text"
                placeholder="Enter your task title"
                className="form-control-lg"
                onChange={(e) => {
                  setTodos({ ...todos, title: e.target.value });
                }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingDescription"
              label="Description"
              className="mb-4"
            >
              <Form.Control
                type="text"
                placeholder="Add a brief description"
                className="form-control-lg"
                onChange={(e) => {
                  setTodos({ ...todos, description: e.target.value });
                }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingDueDate"
              label="Due Date"
              className="mb-4"
            >
              <Form.Control
                type="date"
                className="form-control-lg"
                onChange={(e) => {
                  setTodos({ ...todos, due_date: e.target.value });
                }}
              />
            </FloatingLabel>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => formSubmit()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddTodo