import {
  SET_TASK_CATEGORY,
  SET_TASK_TEXT,
  UPDATE_TASK,
  SET_USERNAME,
  SET_PASSWORD,
  USER_VERIFICATION,
  UPDATE_CATEGORIES,
  REMOVE_TASK
} from '../constants/action-types'

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

export const updateTask = ( task, category, user_id, datestamp, timestamp, key ) => ({
  type: UPDATE_TASK,
  payload: {
    task,
    category,
    user_id,
    datestamp,
    timestamp,
    key
  }
})

export const userVerification = value => ({
  type: USER_VERIFICATION,
  payload: value
})

export const updateCategories = value => ({
  type: UPDATE_CATEGORIES,
  payload: value
})

export const removeTask = key => ({
  type: REMOVE_TASK,
  payload: key
})