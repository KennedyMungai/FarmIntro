import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Todos from './components/Todos';

let year = new Date().getFullYear().toString()

function App()
{
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() =>
  {
    axios.get('http://localhost:8000/api/todo')
      .then((res) => 
      {
        setTodoList(res.data)
      })
  }, [])

  const addTodoHandler = () =>
  {
    axios.post('http://localhost:8000/api/todo', {
      'title': title,
      'description': description
    })
      .then((res) => console.log(res))
      .catch((error) =>
      {
        console.log(error.message)
      })
  }

  return (
    <div
      className="list-group-item justify-content-center align-items-center mx-auto"
      style={
        {
          "width": "400px",
          "backgroundColor": "white",
          "marginTop": "15px",
          "textAlign": "center"
        }
      }
    >
      <h1
        className="cart text-white bg-primary mb"
        style={
          {
            "padding": "1rem"
          }
        }
      >
        Task Manager
      </h1>
      <h6
        className="card text-white bg-primary mb-3"
        style={
          {
            "padding": "0.5rem"
          }
        }
      >
        FARM boi!
      </h6>
      <div className="card-body">
        <h5
          className="cart text-white bg-dark mb-3"
          style={
            {
              "padding": "1rem"
            }
          }
        >
          Add your task
        </h5>
        <span className="cart-text">
          <input
            type="text"
            className="mb-2 form-control titleIn"
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="mb-2 form-control desIn"
            placeholder='Description'
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="btn btn-outline-primary mx-2"
            style={
              {
                'padding': '0.5rem'
              }
            }
            onClick={addTodoHandler}
          >Add Task</button>
        </span>
        <h5 className="card text-white bg-dark m-3 p-2">Your Tasks</h5>
        <div>
          {/* Todo items from an external component */}
        </div>
      </div>
      <h6 className="card text-dark py-1 mb-0">
        Copyright {year}, All rights reserved &copy;
      </h6>
    </div>
  );
}

export default App;
