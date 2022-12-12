import axios from 'axios'
import React from 'react'


const TodoItem = (props) =>
{
    const deleteTodoHandler = (title) => 
    {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
            .then(res => console.log(res.data))

        return (
            <div>
                <p>
                    <span style={{ fontWeight: 'bold, underline' }}>{props.todo.title} : </span> {props.todo.description}
                    <button
                        className="btn btn-outline-danger m2"
                        onClick={() => deleteTodoHandler(props.todo.title)}
                        style={'borderRadius: 50px'}
                    >
                        X
                    </button>
                    <hr />
                </p>
            </div>
        )
    }
}

export default TodoItem;