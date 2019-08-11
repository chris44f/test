import React from 'react'
import Update from './Update'
import './group.css'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const Groups = ( props ) => {

  let days = []

  const addDays = () => {
    props.tasks.map(task => {
      if (!days.includes(task.datestamp)) {
        days.push(task.datestamp)
        return days.sort((a,b) => (new Date(b) - new Date(a)))
      }
    })
  }

  addDays()

  return(
    <div>
      {days.map(date => {
        let group = props.tasks.filter(task => task.datestamp===date)
        return(
          <div>
            <ul className='list-group'>
              <Typography variant='h5' color='primary' align='center'>{date}</Typography>
              {group.map(task => (<Update task={task} removeTask={props.removeTask}/>))}
              <Divider/>
            </ul>
          </div>
        )
      })} 
    </div>
  )

}

export default Groups