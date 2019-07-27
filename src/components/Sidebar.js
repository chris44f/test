import React from 'react'
import User from '../containers/User'

const Sidebar = ({loginDetails}) => {

  return (
    <aside>
      {loginDetails.map(login => <User user={login} key={login.user_id} />)}
    </aside>
  )
}

export default Sidebar