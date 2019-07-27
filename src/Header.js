import React from 'react'

function Header({ user }) {
  const { username } = user
  return (
    <header>
      <h1>{`Welcome back ${username}`}</h1>
    </header>
  )
}

export default Header