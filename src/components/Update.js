import React from 'react'
import { loginDetails } from '../static-data'
import Chip from '@material-ui/core/Chip'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

const Update = ({ task }) => {

  const { taskText, taskCategory, timestamp, user_id } = task

  const findAvatar = (id) => {
    return loginDetails[id.user_id].username.charAt(0)
  }

  const renderCategory = () => {
    if(typeof taskCategory !== 'string'){
      return (taskCategory.map(cat=>(<Chip label={cat} variant='outlined' color='primary'/>)))
    } else { return (<Chip variant='outlined' color='primary' label={taskCategory}/>)}
  }

  return (
    <ListItem alignitems='flex-start' divider>
      <Avatar>{findAvatar({user_id})}</Avatar>
      <ListItemText primary={taskText} secondary={timestamp} />
      {renderCategory()}
    </ListItem>
  )
}

export default Update