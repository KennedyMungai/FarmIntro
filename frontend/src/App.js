import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


function App()
{
  return (
    <div className="App list-group-item justify-content-center align-items-center mx-auto"
      style={{ "width": "400px", "background-color": "white", "margin-top": "15px" }}>
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Task Manager</h1>
      <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
      <div className="card-body">
        <div className="card text-white bg-dark mb-3">Add your tasks</div>
        <span className="card-text">
          <input type="text" className="mb-2 form-control titleIn" placeholder='Title' />
          <input type="text" className="mb-2 form-control desIn" placeholder='Description' />
        </span>
      </div>
    </div>
  );
}

export default App;
