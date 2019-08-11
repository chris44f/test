import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import { setUsername, setPassword, userVerification } from '../actions'
import { loginDetails } from '../static-data'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import './loginpage.css'


const { user001, user002, admin } = loginDetails

class LoginPage extends Component {

  state = {
    showPassword: false
  }

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

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
      <Container component='main' maxWidth='xs' fullWidth className="lol">
        <Box className="login-box">
          <h1 className="welcome-text">Hi, welcome to TaskFeed!</h1>
          <br />
          <Typography component='h4' variant='h6'>To view/post updates, please log in..</Typography>
          <br />
          <TextField
            variant="outlined"
            type="text"
            label="Username"
            value={this.props.username} 
            onChange={this.handleUsernameChange}
            />
          <br />
          <br />
          <TextField
            variant="outlined"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            value={this.props.password}
            onChange={this.handlePasswordChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={this.showPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <br />
          <br />
          <Button onClick={this.handleLoginSubmit} variant="contained" color="primary">Log In</Button>
        </Box>
      </Container>
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