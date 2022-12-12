import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


function App()
{
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() =>
  {
    axios.get('http://localhost:8000/api/todo')
      .then(res =>
      {
        setTodoList(res.data)
      })
  }, [])


  return (
    <div className="App list-group-item justify-content-center align-items-center mx-auto" style={{ "width": "400px", "background-color": "white", "margin-top": "15px" }}>
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Task Manager</h1>
      <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
      <div className="card-body">
        <div className="card text-white bg-dark mb-3">Add your tasks</div>
        <span className="card-text">
          <input type="text" className="mb-2 form-control titleIn" placeholder='Title' />
          <input type="text" className="mb-2 form-control desIn" placeholder='Description' />
          <button className="btn btn-outline-primary mx-2" style={{ 'border-radius': '50px', 'font-weight': 'bold' }}>Add Task</button>
        </span>
        <h5 className="card text-white bg-dark my-3"> Your Tasks</h5>
        <div>
          {/* Todo items */}
        </div>
        <h6 className="card text-dark bg-warning py-1 mb-0 fixed-bottom">Copyright 2022, All Rights Reserved &copy;</h6>
      </div>
    </div >
  );
}

export default App;
