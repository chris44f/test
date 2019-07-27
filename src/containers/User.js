import React from 'react'
import { setCurrentUserId } from '../actions';
import store from '../store'

const User = ({ user }) => {
  const { username, password } = user

  return (

    <div onClick={handleLoginClick.bind(null, user)}>
      <p>{username}</p>
      <p>{password}</p>
    </div>
  )
}

function handleLoginClick({ user_id }) {
  store.dispatch(setCurrentUserId(user_id))
}


export default User