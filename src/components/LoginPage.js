import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import { setUsername, setPassword, userVerification } from '../actions'
import { loginDetails } from '../static-data'

const { user001, user002, admin } = loginDetails

class LoginPage extends Component {

  handleLoginSubmit = e => {
    e.preventDefault()
    if(user001.username === this.props.username && user001.password === this.props.password) {
      this.props.userVerification(`${user001.user_id}`)
    } else if(user002.username === this.props.username && user002.password === this.props.password) {
      this.props.userVerification(`${user002.user_id}`)
    } else if(admin.username === this.props.username && admin.password === this.props.password) {
      this.props.userVerification(`${admin.user_id}`)
    } else { alert("Incorrect combination, please try again")}
  }

  handleUsernameChange = e => {
    this.props.setUsername(e)
  }

  handlePasswordChange = e => {
    this.props.setPassword(e)
  }

  render(){
  return(
    <div>
      <h2>Welcome!</h2>
      <h5>Please log in..</h5>
      <input type="text" placeholder="Enter Username" value={this.props.username} onChange={this.handleUsernameChange}></input>
      <input type="password" placeholder="Enter Password" value={this.props.password} onChange={this.handlePasswordChange}></input>
      <button onClick={this.handleLoginSubmit}>Log In</button>
    </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUsername: event => dispatch(setUsername(event.target.value)),
    setPassword: event => dispatch(setPassword(event.target.value)),
    userVerification: user => dispatch(userVerification(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)