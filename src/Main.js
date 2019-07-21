import React, { Component } from 'react';
import './App.css';
import Individual from './Individual'
import LoginPage from './LoginPage'
import uuidv from 'uuid/v4'

class Main extends Component {

  state = {
    textInput: "",
    catInput: "",
    currentUser: "",
    categories: ["work1", "work2", "work3"],
    newTask: {
      user: "",
      text: "",
      category: "",
      timestamp: "",
      key: ""
    },
    allTasks: [],
    userDetails: true,
  }

  updateText = (text) => {
    this.setState({ textInput: text })
  }

  updateCategory = (cat) => {
    this.setState({ catInput: cat })
  }

  handleNewTask = () => {
    this.setState({ newTask: {
      text: this.state.textInput,
      category: this.state.catInput,
      key: uuidv(),
      user: this.state.currentUser,
      timestamp: `${new Date().toLocaleDateString()}   ${new Date().toLocaleTimeString()}`
    }}, () => this.addNewTask())
  }

  addNewTask = () => {
    if ( this.state.allTasks === undefined || this.state.allTasks.length === 0 ) {

      this.setState({ allTasks: [this.state.newTask] })
    } else { this.setState({ allTasks: this.state.allTasks.concat(this.state.newTask)})
    }
    this.updateList(this.state.catInput)
    this.setState({ textInput: "", catInput: ""})
    this.setState({ allTasks: this.state.allTasks.concat(this.state.newTask)})
  }

  updateList = (cat) => {
    if(!this.state.categories.includes(cat)){
      let categoriesDuplicate = [...this.state.categories]
      let updatedCategories = categoriesDuplicate.concat(cat)
      this.setState({ categories: updatedCategories })
    }
  }

  credentialsVerified = (user) => {
    this.setState({ userDetails: true, currentUser: user })
  }

  render(){

    const verifyUser = () => {
      if ( this.state.userDetails === true ) {
        return (
          <div>
            <h3>Home Page</h3>
            <input type="text" placeholder="What did you do today?" value={this.state.textInput} onChange={(e)=>this.updateText(e.target.value)}></input>
            <input list="categories" value={this.state.catInput} onChange={(e)=>this.updateCategory(e.target.value)}/>
            <datalist id="categories">
              {this.state.categories.map(category => {
                return (
                  <option value={category}/>
                )
              })}
            </datalist>
            <button onClick={()=>this.handleNewTask()}>Add update</button>
            {checkUpdates()}
          </div>
        )
      } else {
        return (
        <LoginPage
          credentialsVerified = {this.credentialsVerified}
        />
        )
      }
    }

    const checkUpdates = () => {
      if (this.state.allTasks.length > 0) {
        return (
          <div>
            <h6>Your Latest Updates</h6>
            {this.state.allTasks.map(task => (
              <Individual
                text={task.text}
                category={task.category}
                key={task.key}
                user={task.user}
                timestamp={task.timestamp}
              />
            ))}
          </div>
        )
      }
    }

    return(
      <div>
        {verifyUser()}
      </div>
      )
  }
}

export default Main;
