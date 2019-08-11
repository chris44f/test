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
import CreateOutlined from '@material-ui/icons/CreateOutlined'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Snackbar from '@material-ui/core/Snackbar'
import Typography from '@material-ui/core/Typography'

class Home extends Component {

  state = {
    showUpdate: false,
    showSnackbar: false
  }

  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  })

  handleUpdate = () => {
    this.setState({ showUpdate: !this.state.showUpdate, showSnackbar: !this.state.showSnackbar})
  }

  handleClose = () => {
    this.setState({ showSnackbar: false})
  }

  handleDialog = () => {
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
        <Header user={this.props.currentUserId} logOut={this.logOut}/>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleDialog}
          fullWidth
          size="large"
        >
          Add an update
          <CreateOutlined/>
        </Button>
          <Dialog
            onClose={this.handleDialog}
            open={this.state.showUpdate}
            TransitionComponent={this.Transition}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle>
              <Typography color='secondary' variant='h5' align='center'>
                Add an update
              </Typography>
            </DialogTitle>
            <NewUpdate closeDialog={this.handleUpdate} cancelDialog={this.handleDialog}/>
          </Dialog>
          <br />
          <br />
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