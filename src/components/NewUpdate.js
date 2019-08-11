import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv from 'uuid/v4'
import { setTaskCategory, setTaskText, updateTask, updateCategories } from '../actions'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import DialogActions from '@material-ui/core/DialogActions'
import Input from '@material-ui/core/Input'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Clear from '@material-ui/icons/ClearRounded'
import AddCircleOutline from '@material-ui/icons/AddCircleOutlineRounded'

class NewUpdate extends Component {

  state = {
    dialogCategories: [],
    newCat: ""
  }

  handleCatAdd = cat => {  
    this.setState({ dialogCategories: cat })
  }

  handleNewCat = newcat => {
    this.setState({ newCat: newcat })
  }

  handleTextChange = e => {
    this.props.setTaskText(e)
  }

  handleCancel = () => {
    this.setState({ dialogCategories: [], newCat: "" })
    this.props.cancelDialog()
  }

  handleSubmit = e => {
    e.preventDefault()
    const key = uuidv()
    const dateStamp = `${new Date().toLocaleDateString()}`
    const timeStamp = `${new Date().toLocaleTimeString()}`
    if (this.state.newCat!=="") {
      let additionalCat = this.state.dialogCategories
      additionalCat = additionalCat.concat(this.state.newCat)
      this.setState({ dialogCategories: additionalCat })
      this.props.updateTask(this.props.taskText, additionalCat, this.props.currentUserId, dateStamp, timeStamp, key)
      this.props.updateCategories(this.state.newCat)
      this.props.closeDialog()
    } else { 
      this.props.updateTask(this.props.taskText, this.state.dialogCategories, this.props.currentUserId, dateStamp, timeStamp, key)
      this.props.closeDialog()
    }
  }

  render(){
    return(
      <DialogContent>
        <FormControl required margin='normal' fullWidth>
          <TextField placeholder="What did you do today?" value={this.props.taskText} onChange={this.handleTextChange} variant='outlined'></TextField>
        </FormControl>
        <br />
        <FormControl required margin='normal' fullWidth>
          <InputLabel>Add tags to update</InputLabel>
          <Select
            multiple
            value={this.state.dialogCategories} 
            onChange={(e)=>this.handleCatAdd(e.target.value)}
            input={<Input />}
            renderValue={ selected => (
              selected.map(value => (
                <Chip color='secondary' variant='outlined' label={value} />
              ))
            )}
          >
            {this.props.allCats.map(category => {
              return (
                <MenuItem value={category}>
                  <Checkbox checked={this.state.dialogCategories.includes(category)}/>
                  <ListItemText primary={category} />
                </MenuItem>
              )
            })} 
          </Select>
        </FormControl>
        <FormControl margin='normal' fullWidth>
          <TextField placeholder="Want to add a different tag?" value={this.state.newCat} onChange={(e)=>this.handleNewCat(e.target.value)}></TextField>
        </FormControl>
        {/* {this.state.dialogCategories.map(cat => {
          return(
            <Chip label={cat}/>
          )
        })} */}
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={this.handleCancel}>
          Cancel
          <Clear />
        </Button>
        <Button variant='contained' color='primary' onClick={(e)=>this.handleSubmit(e)}>
          Submit Update
          <AddCircleOutline />
        </Button>
      </DialogActions>
      </DialogContent>
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
    setTaskCategory: taskCat => dispatch(setTaskCategory(taskCat)),
    setTaskText: event => dispatch(setTaskText(event.target.value)),
    updateTask: (text,cat,id,dstamp,tstamp,key) => dispatch(updateTask(text,cat,id,dstamp,tstamp,key)),
    updateCategories: cat => dispatch(updateCategories(cat))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUpdate)