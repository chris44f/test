import React, { Component } from 'react'; 
import store from './store';
// import { setCurrentUserId } from './actions';

export default class LoginPage extends Component {

//     // state = {
//     //     user001: {
//     //         username: "guest1",
//     //         password: "s3cRet1"
//     //     },
//     //     user002: {
//     //         username: "guest2",
//     //         password: "secR3t2"
//     //     },
//     //     enteredUsername: "",
//     //     enteredPassword: ""
//     // }

//     // updateUsername = (username) => {
//     //     this.setState({ enteredUsername: username})
//     // }

//     // updatePassword = (password) => {
//     //     this.setState({ enteredPassword: password})
//     // }

//     // checkDetails = () => {
//     //     if (this.state.user001.username === this.state.enteredUsername && this.state.user001.password === this.state.enteredPassword ) {
//     //         this.props.credentialsVerified("user001")
//     //     } else if (this.state.user002.username === this.state.enteredUsername && this.state.user002.password === this.state.enteredPassword ) {
//     //         this.props.credentialsVerified("user002")
//     //     } else  {
//     //         alert("incorrect combination")
//     //     }
//     // }

    // render() {
    //     return (
    //         <div>
    //             <h3>Username:</h3>
    //             {/* <input type="text" onChange={(e)=>this.updateUsername(e.target.value)}></input> */}
    //             <h3>Password:</h3>
    //             {/* <input type="password" onChange={(e)=>this.updatePassword(e.target.value)}></input> */}
    //             {/* <button onClick={()=>this.checkDetails()}>Log In</button> */}
    //         </div>
    //     )
    // }

  // handleLoginClick = ({ user_id }) => {
  //   console.log(user_id)
  //   store.dispatch(setCurrentUserId(user_id))
  // }

    render() {
      return(
        <div>login</div>
      )
    }

}