import React from 'react'
import Typography from '@material-ui/core/Typography'
import { loginDetails } from '../static-data'

function Header({ user }) {
  return (
    <div>
      <Typography variant='h3'>{`Welcome back ${loginDetails[user].username}`}</Typography>
    </div>
  )
}

export default Header