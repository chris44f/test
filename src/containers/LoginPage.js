import React, { Component } from 'react'; 
import store from '../store';
import { setUsername } from '../actions'
import { setPassword } from '../actions'
import { userVerification } from '../actions'
import { loginDetails } from '../static-data'

const LoginPage = () => {


  const { username, password } = store.getState()

  const { user001, user002 } = loginDetails

  const handleUsernameChange = e => {
    store.dispatch(setUsername(e.target.value))
  }

  const handlePasswordChange = e => {
    store.dispatch(setPassword(e.target.value))
  }

  const handleLoginSubmit = e => {
    e.preventDefault()
    if(user001.username === username && user001.password === password) {
      store.dispatch(userVerification(`${user001.user_id}`))
    } else if(user002.username === username && user002.password === password) {
      store.dispatch(userVerification(`${user002.user_id}`))
    } else { alert("Incorrect combination, please try again")}
  }

  return(
    <div>
      <input type="text" placeholder="Enter Username" value={username} onChange={handleUsernameChange}></input>
      <input type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange}></input>
      <button onClick={handleLoginSubmit}>Log In</button>
    </div>
  )

}

export default LoginPage