import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv from 'uuid/v4'
import { setTaskCategory, setTaskText, updateTask, updateCategories } from '../actions'

class NewUpdate extends Component {

  handleSubmit = e => {
    e.preventDefault()
    const key = uuidv()
    const timestamp = `${new Date().toLocaleDateString()}   ${new Date().toLocaleTimeString()}`
    this.props.updateTask(this.props.taskText, this.props.taskCategory, this.props.currentUserId, timestamp, key)
    if( !this.props.allCats.includes(this.props.taskCategory)){
      this.props.updateCategories(this.props.taskCategory)
    }
  }

  handleCatChange = e => {
    this.props.setTaskCategory(e)
  }

  handleTextChange = e => {
    this.props.setTaskText(e)
  }

  render(){
    return(
      <div>
      <input type="text" placeholder="What did you do today?" value={this.props.taskText} onChange={this.handleTextChange}></input>
      <input list="categories" value={this.props.taskCategory} onChange={this.handleCatChange}/>
      <datalist id="categories">
        {this.props.allCats.map(category => {
          return (
            <option value={category}/>
          )
        })}
      </datalist>
      <button onClick={this.handleSubmit}>Submit Update</button>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId,
    taskCategory: state.taskCategory,
    taskText: state.taskText,
    allCats: state.allCats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTaskCategory: event => dispatch(setTaskCategory(event.target.value)),
    setTaskText: event => dispatch(setTaskText(event.target.value)),
    updateTask: (text,cat,id,tstamp,key) => dispatch(updateTask(text,cat,id,tstamp,key)),
    updateCategories: cat => dispatch(updateCategories(cat))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUpdate)