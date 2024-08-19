/* eslint-disable no-unused-vars */
import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

  return (
    <ul className='main'>{props.todos.map((todo, todoIndex) => {
      return (
        <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo} {...props}/>
      )
    })}</ul>
  )
}
