import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App()
{
  return (
    <div className="App">
      <div
        className="list-group-item justify-content-center align-items-center mx-auto"
        style={
          {
            "width": "400px",
            "backgroundColor": "white",
            "marginTop": "15px"
          }
        }
      >
        <h1
          className="cart text-white bg-primary mb"
          style={
            {
              "maxWidth": "20rem",
              "padding": "1rem"
            }
          }
        >
          Task Manager
        </h1>
      </div>
    </div>
  );
}

export default App;
