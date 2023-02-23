import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App()
{
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
          <input type="text" className="mb-2 form-control titleIn" placeholder='Title' />
        </span>
      </div>
    </div>
  );
}

export default App;
