import React from 'react'
import Button from '@material-ui/core/Button'
import { loginDetails } from '../static-data'
import './header.css'

function Header({ user, logOut }) {
  return (
    <div className="header-container">
      <h1 className="header-text">{`Welcome back, ${loginDetails[user].username}!`}</h1>
      <Button color="secondary" variant="outlined" onClick={()=>logOut("")}>Log Out</Button>
    </div>
  )
}

export default Header