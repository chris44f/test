import React, { Component } from 'react';
import '../App.css';
import Individual from '../Individual'
import LoginPage from '../LoginPage'
import uuidv from 'uuid/v4'
import _ from 'lodash'
import Sidebar from '../components/Sidebar'
import Home from '../Home'
import store from '../store'
import { setTaskCategory, setTaskText, updateTask } from '../actions'

const Main = () => {

  // state = {
    // textInput: "",
    // catInput: "",
    // currentUserId: "user001",
    // categories: ["work1", "work2", "work3"],
    // newTask: {
    //   user: "",
    //   text: "",
    //   category: "",
    //   timestamp: "",
    //   key: ""
    // },
    // allTasks: {
    //   user001: {
    //     0: {
    //       taskText: "first task update",
    //       taskCategory" "work1",
    //       taskTimestamp,
    //       is_user_task: true
    //     },
    //     1: {
    //       taskText: "second task update",
    //       taskCategory: "work3"
    //       taskTimestamp,
    //       is_user_task: true
    //     }
    //   },
    //   user002: {
    //     0: {
    //       taskText: "my first update"
    //       taskCategory: "work 1"
    //       taskTimestamp,
    //       is_user_task: true
    //     }
    //   } 
    // },
    // users: [],
    // userDetails: true,
  // }

  // updateText = (text) => {
  //   this.setState({ textInput: text })
  // }

  // updateCategory = (cat) => {
  //   this.setState({ catInput: cat })
  // }

  // handleNewTask = () => {
  //   this.setState({ newTask: {
  //     text: this.state.textInput,
  //     category: this.state.catInput,
  //     key: uuidv(),
  //     user: this.state.currentUser,
  //     timestamp: `${new Date().toLocaleDateString()}   ${new Date().toLocaleTimeString()}`
  //   }}, () => this.addNewTask())
  // }

  // addNewTask = () => {
  //   if ( this.state.allTasks === undefined || this.state.allTasks.length === 0 ) {

  //     this.setState({ allTasks: [this.state.newTask] })
  //   } else { this.setState({ allTasks: this.state.allTasks.concat(this.state.newTask)})
  //   }
  //   this.updateList(this.state.catInput)
  //   this.setState({ textInput: "", catInput: ""})
  //   this.setState({ allTasks: this.state.allTasks.concat(this.state.newTask)})
  // }

  // updateList = (cat) => {
  //   if(!this.state.categories.includes(cat)){
  //     let categoriesDuplicate = [...this.state.categories]
  //     let updatedCategories = categoriesDuplicate.concat(cat)
  //     this.setState({ categories: updatedCategories })
  //   }
  // }

  // credentialsVerified = (user) => {
  //   this.setState({ userDetails: true, currentUser: user })
  // }

    const { currentUserId, loginDetails, allTasks, taskCategory, taskText } = store.getState()

    const whatToRender = () => {
      if(currentUserId === "user001" || currentUserId === "user002") {
        return <Home allTasks={_.values(allTasks)} currentUserId={currentUserId}/>
      } else {
        return <LoginPage />
      }
    }

    const handleCatChange = e => {
      store.dispatch(setTaskCategory(e.target.value))
    }

    const handleTextChange = e => {
      store.dispatch(setTaskText(e.target.value))
    }

    const handleSubmit = e => {
      e.preventDefault()
      store.dispatch(updateTask( taskText, currentUserId ))
    }

    return (
      <div>
        <Sidebar loginDetails={_.values(loginDetails)} />
        <button onClick={handleSubmit}>Click me</button>
        <input type="text" placeholder="What did you do today?" value={taskText} onChange={handleTextChange}></input>
        <input type="text" value={taskCategory} onChange={handleCatChange}/>
        {whatToRender()}
      </div>
    )

  }


  // render(){

//     const verifyUser = () => {
//       if ( this.state.userDetails === true ) {
//         return (
//           <div>
//             <h3>Home Page</h3>
//             <input type="text" placeholder="What did you do today?" value={this.state.textInput} onChange={(e)=>this.updateText(e.target.value)}></input>
//             <input list="categories" value={this.state.catInput} onChange={(e)=>this.updateCategory(e.target.value)}/>
//             <datalist id="categories">
//               {this.state.categories.map(category => {
//                 return (
//                   <option value={category}/>
//                 )
//               })}
//             </datalist>
//             <button onClick={()=>this.handleNewTask()}>Add update</button>
//             {checkUpdates()}
//           </div>
//         )
//       } else {
//         return (
//         <LoginPage
//           credentialsVerified = {this.credentialsVerified}
//         />
//         )
//       }
//     }

//     const checkUpdates = () => {
//       if (this.state.allTasks.length > 0) {
//         return (
//           <div>
//             <h6>Your Latest Updates</h6>
//             {this.state.allTasks.map(task => (
//               <Individual
//                 text={task.text}
//                 category={task.category}
//                 key={task.key}
//                 user={task.user}
//                 timestamp={task.timestamp}
//               />
//             ))}
//           </div>
//         )
//       }
//     }

//     return(
//       <div>
//         {verifyUser()}
//       </div>
//       )
//   }
// }

export default Main;
