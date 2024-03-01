import React from 'react'

export default function todoItem({todo}) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.desc}</h3>
      <button className='btn btn-sm btn-danger'>Delete</button>
    </div>
  )
}
