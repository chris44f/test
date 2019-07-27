import { SET_CURRENT_USER_ID } from '../constants/action-types'

export default function currentUserId(state = null , action) {
  switch (action.type) {
    case SET_CURRENT_USER_ID:
      return action.payload
    default:
      return state
  }
}