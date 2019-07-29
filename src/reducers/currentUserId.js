import { USER_VERIFICATION } from '../constants/action-types'

export default (state = null, action) => {
  switch (action.type) {
    case USER_VERIFICATION:
      return action.payload
    default:
      return state
  }
}