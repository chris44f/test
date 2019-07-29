import { SET_USERNAME } from '../constants/action-types'

export default function username(state = "", action) {
  switch (action.type) {
    case SET_USERNAME:
      return action.payload
    default:
      return state
  }
}