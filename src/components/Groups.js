import React from 'react'
import Update from './Update'

const Groups = ( props ) => {

  let days = []

  const addDays = () => {
    props.tasks.map(task => {
      if (!days.includes(task.datestamp)) {
        days.push(task.datestamp)
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
            <ul>
              {date}
              {group.map(task => (<Update task={task} removeTask={props.removeTask} />))}
            </ul>
          </div>
        )
      })} 
    </div>
  )

}

export default Groups