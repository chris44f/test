import React from 'react'
import Update from './Update'
import _ from 'lodash'

function Updates({ allTasks }) {

  return (
    <div>
      <h3>
        Here are your updates:
      </h3>
      {_.values(allTasks).map(task => (
        <Update task={task}/>
      ))}
    </div>
  )
}

export default Updates