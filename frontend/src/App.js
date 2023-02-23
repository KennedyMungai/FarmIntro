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
      <h6 className="card text-white bg-primary mb-3">FARM boi!</h6>
    </div>
  );
}

export default App;
