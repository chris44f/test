import { SET_TASK_CATEGORY, SET_TASK_TEXT, UPDATE_TASK, SET_USERNAME, SET_PASSWORD, USER_VERIFICATION } from '../constants/action-types'

export const setTaskCategory = value => ({
  type: SET_TASK_CATEGORY,
  payload: value
})

export const setTaskText = value => ({
  type: SET_TASK_TEXT,
  payload: value
})

export const setUsername = value => ({
  type: SET_USERNAME,
  payload: value
})

export const setPassword = value => ({
  type: SET_PASSWORD,
  payload: value
})

export const updateTask = ( task, category, user_id ) => ({
  type: UPDATE_TASK,
  payload: {
    task,
    category,
    user_id
  }
})

export const userVerification = value => ({
  type: USER_VERIFICATION,
  payload: value
})