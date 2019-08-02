import React from 'react'

function Update({ task }) {

  const { taskText, taskCategory, timestamp, user_id, key } = task
  return (
    <div>
      <p>{taskText}</p>
      <p>{taskCategory}</p>
      <p>{user_id}</p>
      <p>{timestamp}</p>
      <p>{key}</p>
    </div>
  )
}

export default Update