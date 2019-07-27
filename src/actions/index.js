import { SET_CURRENT_USER_ID, SET_TASK_CATEGORY, SET_TASK_TEXT, UPDATE_TASK } from '../constants/action-types'

export const setCurrentUserId = id => ({
  type: SET_CURRENT_USER_ID,
  payload: id
})

export const setTaskCategory = value => ({
  type: SET_TASK_CATEGORY,
  payload: value
})

export const setTaskText = value => ({
  type: SET_TASK_TEXT,
  payload: value
})

export const updateTask = ( task, user_id ) => ({
  type: UPDATE_TASK,
  payload: {
    task,
    user_id
  }
})
