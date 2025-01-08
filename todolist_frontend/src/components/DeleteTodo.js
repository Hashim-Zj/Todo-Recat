import React from 'react'
import { deleteTodo } from '../Apis/feachApi';
import { toast } from "react-toastify";

const DeleteTodo = ({ id }) => {

  const delete_Todo = () => {
    console.log(id);

    deleteTodo(id).then((res) => {
      console.log(res.data);
      toast.warning("Todo Deleted!")
      window.location.reload()
    })
  }
  return (
    <span className='btn btn-danger py-0 ms-1' onClick={(e) => {
      const isConfirmed = window.confirm("Are you sure you want to delete this todo?");
      if (isConfirmed) {
        delete_Todo()
      }
    }}>Delete
    </span>
  )
}

export default DeleteTodo