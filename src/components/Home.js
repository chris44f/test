import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Updates from './Updates'
import _ from 'lodash'
import uuidv from 'uuid/v4'
import { setTaskCategory, setTaskText, updateTask } from '../actions'

class Home extends Component {

  handleSubmit = e => {
    e.preventDefault()
    const key = uuidv()
    const timestamp = `${new Date().toLocaleDateString()}   ${new Date().toLocaleTimeString()}`
    this.props.updateTask(this.props.taskText, this.props.taskCategory, this.props.currentUserId, timestamp, key)
  }

  handleCatChange = e => {
    this.props.setTaskCategory(e)
  }

  handleTextChange = e => {
    this.props.setTaskText(e)
  }

  render(){

    console.log(this.props)

    return (
      <div>
        <Header user={this.props.currentUserId}/>
          <input type="text" placeholder="What did you do today?" value={this.props.taskText} onChange={this.handleTextChange}></input>
          <input type="text" value={this.props.taskCategory} onChange={this.handleCatChange}/>
          <button onClick={this.handleSubmit}>Submit Update</button>
        <Updates allTasks={_.values(this.props.allTasks)}></Updates>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return{
//     allTasks: state.allTasks,
//     currentUserId: state.currentUserId
//   }
// }

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId,
    allTasks: state.allTasks,
    taskCategory: state.taskCategory,
    taskText: state.taskText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTaskCategory: event => dispatch(setTaskCategory(event.target.value)),
    setTaskText: event => dispatch(setTaskText(event.target.value)),
    updateTask: (text,cat,id,tstamp,key) => dispatch(updateTask(text,cat,id,tstamp,key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)