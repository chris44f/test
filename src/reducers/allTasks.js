import { allTasks } from '../static-data'
import { UPDATE_TASK } from '../constants/action-types'
import _ from 'lodash'

export default (state = allTasks, action) => {
  switch (action.type) {
    case UPDATE_TASK:
      const { task, category, user_id } = action.payload
      const allUserTasks = state[user_id]
      const number = +_.keys(allUserTasks).pop() + 1
      return {
        ...state,
        [user_id]: {
          ...allUserTasks,
          [number]: {
            taskText: task,
            taskCategory: category,
            is_user_task: true
          }
        }
      }
    default:
      return state
  }
}