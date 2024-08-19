import {useState} from 'react'

export default function TodoInput(props) {
    // const {handleAddTodos} = props

    return (
        <header>
            <input placeholder="Enter todo.." 
            value={props.todoValue}
            onChange={(e) => props.setTodoValue(e.target.value)}/>

            <button onClick={() => {
                props.handleAddTodos(props.todoValue)
                props.setTodoValue('')
            }}>Add</button>
        </header>
    )
}