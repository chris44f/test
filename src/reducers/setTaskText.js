import { SET_TASK_TEXT } from '../constants/action-types'

export default function taskText(state = "", action) {
  switch (action.type) {
    case SET_TASK_TEXT:
      return action.payload
    default:
      return state
  }
}