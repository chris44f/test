import { SET_PASSWORD } from '../constants/action-types'

export default function password(state = "", action) {
  switch (action.type) {
    case SET_PASSWORD:
      return action.payload
    default:
      return state
  }
}