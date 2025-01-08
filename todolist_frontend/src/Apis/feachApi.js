import commonApi from "./commonApi"


export const listTodo=()=>{
  return commonApi("GET","","http://127.0.0.1:8000/todo/","")
}

export const getTodo=(id)=>{
  return commonApi("GET","",`http://127.0.0.1:8000/todo/${id}`,"")
}

export const addTodo=(data)=>{
  return commonApi("POST",data,"http://127.0.0.1:8000/todo/","")
}

export const edit_Todo=(data,id)=>{
  return commonApi("PUT",data,`http://127.0.0.1:8000/todo/${id}/`,"")
}

export const deleteTodo=(id)=>{
  return commonApi("DELETE","",`http://127.0.0.1:8000/todo/${id}/`,"")
}