import React from 'react'
import { loginDetails } from '../static-data'
import Chip from '@material-ui/core/Chip'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import DeleteIcon from '@material-ui/icons/Delete'

const Update = ({ task, removeTask }) => {

  const { taskText, taskCategory, user_id, datestamp, timestamp, key } = task

  const findAvatar = (id) => {
    return loginDetails[id.user_id].username.charAt(0)
  }

  const renderCategory = () => {
    if(typeof taskCategory !== 'string'){
      return (taskCategory.map(cat=>(<Chip label={cat} color='primary'/>)))
    } else { return (<Chip color='primary' label={taskCategory}/>)}
  }

  const renderDelete = () => {
    if(task.user_id === "admin") {
      return (<IconButton onClick={()=>removeTask({key})}><DeleteIcon /></IconButton>)
    }
  }

  return (
    <ListItem alignitems='flex-start' divider={<Divider component='li' light />}>
      <Avatar>{findAvatar({user_id})}</Avatar>
      <ListItemText primary={taskText} secondary={`Updated at ${timestamp} on ${datestamp}`}/>
      {renderCategory()}
      {renderDelete()}
    </ListItem>
  )
}

export default Update