import { UPDATE_CATEGORIES } from '../constants/action-types'
import { allCats } from '../static-data'

export default (state = allCats, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}