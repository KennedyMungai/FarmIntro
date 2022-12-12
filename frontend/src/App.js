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
    </div>
  );
}

export default App;
