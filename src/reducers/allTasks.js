import { allTasks } from '../static-data'
import { UPDATE_TASK } from '../constants/action-types'
import _ from 'lodash'

export default (state = allTasks, action) => {
  switch (action.type) {
    case UPDATE_TASK:
      const { task, category, user_id, timestamp, key } = action.payload
      const number = +_.keys(state).pop() + 1
      return {
        ...state,
        [number]: {
          taskText: task,
          taskCategory: category,
          user_id: user_id,
          timestamp: timestamp,
          key: key
        }
      }
    default:
      return state
  }
}