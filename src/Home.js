import React from 'react'
import store from './store'
import Header from './Header'
import Updates from './Updates'
import _ from 'lodash'

const Home = ({ allTasks, currentUserId }) => {
  const state = store.getState()
  const activeUser = state.loginDetails[currentUserId]
  const userTasks = state.allTasks[currentUserId]

  return (
    <div>
      <Header user={activeUser}/>
      <Updates userTasks={_.values(userTasks)}></Updates>
    </div>
  )
}

export default Home