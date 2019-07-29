import React from 'react'
import Update from './Update'

function Updates({ userTasks }) {
  return (
    <div>
      <h3>
        Here are your tasks:
      </h3>
      {userTasks.map(user => (
        <Update user={user} key={user.updateId} />
      ))}
    </div>
  )
}

export default Updates