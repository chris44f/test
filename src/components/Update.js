import React from 'react'

function Update({ user }) {
  const { taskText, taskCategory, is_user_task } = user
  return (
    <div>
      <p>{taskText}</p>
      <p>{taskCategory}</p>
    </div>
  )
}

export default Update