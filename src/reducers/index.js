import currentUserId from './currentUserId'
import allTasks from './allTasks'
import taskCategory from './setTaskCategory'
import taskText from './setTaskText'
import username from './setUsername'
import password from './setPassword'
import allCats from './allCats'
import { combineReducers } from 'redux'

export default combineReducers({
  currentUserId,
  allCats,
  allTasks,
  taskCategory,
  taskText,
  username,
  password,
})