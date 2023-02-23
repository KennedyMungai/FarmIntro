import axios from 'axios'
import React from 'react'

const Todo = (props) =>
{
    const deleteTodoHandler = (title) =>
    {
        axios.delete(`http://localhost:800/api/todo/${title}`)
            .then((res) => console.log(res.data))
    }

    return (
        <div>
            <p>
                <span
                    style={
                        {
                            fontWeight: 'bold, underline',
                        }
                    }>
                    {props.todo.title} :
                </span>
                {props.todo.description}
                <button
                    className="btn btn-outline-danger m-2"
                    style={
                        {
                            borderRadius: '50px'
                        }
                    }
                    onClick={() => deleteTodoHandler(props.todo.title)}
                >
                    X
                </button>
                <hr />
            </p>
        </div>
    )
}

export default Todo