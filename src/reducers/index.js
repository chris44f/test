import currentUserId from './currentUserId'
import loginDetails from './loginDetails'
import allTasks from './allTasks'
import taskCategory from './setTaskCategory'
import taskText from './setTaskText'
import { combineReducers } from 'redux'

export default combineReducers({
  currentUserId,
  loginDetails,
  allTasks,
  taskCategory,
  taskText
})