import React from 'react'

function Header({ user }) {
  return (
    <header>
      <h1>{`Welcome back ${user}`}</h1>
    </header>
  )
}

export default Header