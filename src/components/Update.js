import React from 'react'

const Update = ({ task }) => {

  const { taskText, taskCategory, timestamp } = task
  return (
    <div>
      <p>{taskText}</p>
      <p>{taskCategory}</p>
      <p>{timestamp}</p>
    </div>
  )
}

export default Update