import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUsername, setPassword, userVerification } from '../actions'
import Header from './Header'
import Button from '@material-ui/core/Button'
import NewUpdate from './NewUpdate'
import Updates from './Updates'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Create from '@material-ui/icons/Create'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Snackbar from '@material-ui/core/Snackbar'

class Home extends Component {

  state = {
    showUpdate: false,
    showSnackbar: true
  }

  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  })

  handleUpdate = () => {
    this.setState({ showUpdate: !this.state.showUpdate})
  }

  logOut = () => {
    this.props.setUsername()
    this.props.setPassword()
    this.props.userVerification()
  }

  render(){
    return (
      <div> 
        <Header user={this.props.currentUserId}/>
        <Button 
          variant="contained"
          color="primary"
          onClick={this.handleUpdate}
        >
          Add an update
          <Create />
        </Button>
          <Dialog
            onClose={this.handleUpdate}
            open={this.state.showUpdate}
            TransitionComponent={this.Transition}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle>Add an update</DialogTitle>
            <NewUpdate closeDialog={this.handleUpdate}/>
          </Dialog>
          <Updates />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.showSnackbar}
            autoHideDuration={3000}
            onClose={this.handleClose}
            message={<span>Update added!</span>}
            action={<CheckCircleIcon />}
          />
          <Button color="secondary" variant="outlined" onClick={()=>this.logOut("")}>Log Out</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userVerification: () => dispatch(userVerification("")),
    setUsername: () => dispatch(setUsername("")),
    setPassword: () => dispatch(setPassword(""))
  }
}

export default connect(state => ({ currentUserId: state.currentUserId }), mapDispatchToProps)(Home)