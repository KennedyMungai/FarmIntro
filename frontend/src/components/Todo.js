import axios from 'axios'
import React from 'react'


function TodoItem(props)
{
    const deleteTodoHandler = (title) => 
    {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
            .then(res => console.log(res.data))
    }
}