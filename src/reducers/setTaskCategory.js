import { SET_TASK_CATEGORY } from '../constants/action-types'

export default function taskCategory(state = "", action) {
  switch (action.type) {
    case SET_TASK_CATEGORY:
      return action.payload
    default:
      return state
  }
}