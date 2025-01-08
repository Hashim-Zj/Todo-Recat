import React, { useEffect, useState } from 'react'
import { edit_Todo, getTodo } from '../Apis/feachApi'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { toast } from 'react-toastify';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const EditTodo = ({ id }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    due_date: "",
    status: ""
  })
  console.log(id);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getTodo(id).then((res) => {
      setTodo(res.data)
    })
  },[id])

  const formSubmit = () => {
    const { title, description, due_date, status } = todo

    if (!title || !description || !due_date || !status) {
      toast.warning("Please fill the datas")
    } else {
      edit_Todo(todo,id).then((res) => {
        console.log(res.data);
        handleClose();
        toast.success("Todo Edited")
        window.location.reload()
      })
    }

  }

  return (
    <div>

      <button className="btn btn-warning py-0" onClick={handleShow}>
        Edit
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className=''>Mark Progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <div className="p-4 rounded shadow-lg bg-light">
            {/* Title Field */}
            <FloatingLabel controlId="floatingtitle" label="Title" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Enter your task title"
                className="form-control-lg"
                value={todo.title || ''} 
                onChange={(e) => {
                  setTodo({ ...todo, title: e.target.value });
                }}
              />
            </FloatingLabel>

            {/* Description Field */}
            <FloatingLabel controlId="floatingDescription" label="Description" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Add a brief description"
                className="form-control-lg"
                value={todo.description || ''} 
                onChange={(e) => {
                  setTodo({ ...todo, description: e.target.value });
                }}
              />
            </FloatingLabel>

            <div className="row mb-4">
              <div className="col-md-6">
                <FloatingLabel controlId="floatingStatus" label="Status">
                  <Form.Control
                    as="select"
                    className="form-control-lg"
                    value={todo.status || ''} 
                    onChange={(e) => {
                      setTodo({ ...todo, status: e.target.value });
                    }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </Form.Control>
                </FloatingLabel>
              </div>
              <div className="col-md-6">
                <FloatingLabel controlId="floatingDueDate" label="Due Date">
                  <Form.Control
                    type="date"
                    className="form-control-lg"
                    value={todo.due_date || ''} 
                    onChange={(e) => {
                      setTodo({ ...todo, due_date: e.target.value });
                    }}
                  />
                </FloatingLabel>
              </div>

             
            </div>
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

export default EditTodo