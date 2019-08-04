import React, { Component } from 'react';
import '../App.css';
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import Home from './Home'

class Main extends Component {

    whatToRender = () => {
      if(this.props.currentUserId === "user001" || this.props.currentUserId === "user002" || this.props.currentUserId === "admin") {
        return <Home />
      } else {
        return <LoginPage />
      }
    }

    render(){
      return (
        <div>
          {this.whatToRender()}
        </div>
      )
    }
  }

export default connect(state => ({ currentUserId: state.currentUserId }))(Main)