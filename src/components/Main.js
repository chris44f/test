import React, { Component } from 'react';
import '../App.css';
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
// import uuidv from 'uuid/v4'
// import _ from 'lodash'
import Home from './Home'
// import { setTaskCategory, setTaskText, updateTask } from '../actions'

class Main extends Component {

  // state = {
    // categories: ["work1", "work2", "work3"],
    // newTask: {
    //   user: "",
    //   text: "",
    //   category: "",
    //   timestamp: "",
    //   key: ""
    // },
    // users: [],
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

    // whatToRender = () => {
    //   if(this.props.currentUserId === "user001" || this.props.currentUserId === "user002") {
    //     return <Home allTasks={_.values(this.props.allTasks)} currentUserId={this.props.currentUserId}/>
    //   } else {
    //     return <LoginPage />
    //   }
    // }

    whatToRender = () => {
      if(this.props.currentUserId === "user001" || this.props.currentUserId === "user002") {
        return <Home />
      } else {
        return <LoginPage />
      }
    }

    // handleCatChange = e => {
    //   this.props.setTaskCategory(e)
    // }

    // handleTextChange = e => {
    //   this.props.setTaskText(e)
    // }

    // handleSubmit = e => {
    //   e.preventDefault()
    //   const key = uuidv()
    //   const timestamp = `${new Date().toLocaleDateString()}   ${new Date().toLocaleTimeString()}`
    //   this.props.updateTask(this.props.taskText, this.props.taskCategory, this.props.currentUserId, timestamp, key)
    // }

    render(){
      return (
        <div>
          {/* <button onClick={this.handleSubmit}>Click me</button>
          <input type="text" placeholder="What did you do today?" value={this.props.taskText} onChange={this.handleTextChange}></input>
          <input type="text" value={this.props.taskCategory} onChange={this.handleCatChange}/> */}
          {this.whatToRender()}
        </div>
      )
    }
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

// const mapStateToProps = state => {
//   return {
//     currentUserId: state.currentUserId,
//     allTasks: state.allTasks,
//     taskCategory: state.taskCategory,
//     taskText: state.taskText
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setTaskCategory: event => dispatch(setTaskCategory(event.target.value)),
//     setTaskText: event => dispatch(setTaskText(event.target.value)),
//     updateTask: (text,cat,id,tstamp,key) => dispatch(updateTask(text,cat,id,tstamp,key))
//   }
// }

// export default connect({mapStateToProps},mapDispatchToProps)(Main)

export default connect(state => ({ currentUserId: state.currentUserId }))(Main)