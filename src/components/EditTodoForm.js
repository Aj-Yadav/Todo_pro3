import React from 'react'
import { useState } from 'react'

export const EditTodoForm = ({ editTodo , task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(value)
    editTodo(value, task.id)

    setValue("")

  }
  return (
    <form className='EditTodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={value} placeholder='update task?' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
