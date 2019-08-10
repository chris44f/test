import { allTasks } from '../static-data'
import { UPDATE_TASK, REMOVE_TASK } from '../constants/action-types'
import _ from 'lodash'

export default (state = allTasks, action) => {
  switch (action.type) {
    case UPDATE_TASK:
      const { task, category, user_id, datestamp, timestamp, key } = action.payload
      // const number = +_.keys(state).pop() + 1
      return {
        ...state,
        [key]: {
          taskText: task,
          taskCategory: category,
          user_id: user_id,
          datestamp: datestamp,
          timestamp: timestamp,
          key: key
        }
      }
    case REMOVE_TASK:
      const id = action.payload
      let removedTask = _.values(state)
      removedTask = removedTask.filter( task => task.key !== id )
      let newState = _.keyBy(removedTask,'key')
      return {
        newState
      }
    default:
      return state
  }
}