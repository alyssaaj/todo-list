/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function TodoCard(props) {

  return (
    <li className='todoItem'>
          {props.todo}
          <div className='actionsContainer'>
            <button onClick={() => {props.handleEditTodo(props.todoIndex)}}>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>

            <button onClick={() => {props.handleDeleteTodo(props.todoIndex)}}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>    
    </li>
  )
}
