import axios from 'axios'
import React from 'react'

const Todo = (props) =>
{
    const deleteTodoHandler = (todo) =>
    {
        axios.delete(`http://localhost:800/api/todo/${title}`)
            .then((res) => console.log(res.data))
    }

    return (
        <div>Todo</div>
    )
}

export default Todo