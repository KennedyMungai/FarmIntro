import React from 'react'
import Todo from './Todo'

const Todos = (props) =>
{
    return (
        <div>
            <ul>
                {props.todoList.map((todo) =>
                {
                    <Todo todo={todo} />
                })}
            </ul>
        </div>
    )
}

export default Todos