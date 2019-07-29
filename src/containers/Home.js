import React from 'react'
import store from '../store'
import Header from '../components/Header'
import Updates from '../components/Updates'
import _ from 'lodash'

const Home = ({ currentUserId }) => {
  const state = store.getState()
  const userTasks = state.allTasks[currentUserId]

  return (
    <div>
      <Header user={currentUserId}/>
      <Updates userTasks={_.values(userTasks)}></Updates>
    </div>
  )
}

export default Home