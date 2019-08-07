import React from 'react'
import Update from './Update'
import _ from 'lodash'
import Typography from '@material-ui/core/Typography'

const Updates = ({ allTasks }) => {

  return (
    <div>
      <Typography variant='h4'>
        Here are your updates:
      </Typography>
      <ul>
      {_.values(allTasks).map(task => (
        <Update task={task}/>
      ))}
      </ul>
    </div>
  )
}

export default Updates