import { createStore } from "redux"
import reducer from '../reducers'
import { saveState, loadState } from '../localStorage'
import { throttle } from 'lodash'

const persistedState = loadState()

const store = createStore(reducer)
// const store = createStore(reducer,persistedState)

store.subscribe(throttle(()=> {
  saveState({
    allTasks: store.getState().allTasks,
    allCats: store.getState().allCats
  })
},5000))

export default store