import React, {Component} from 'react'
import { connect } from 'react-redux'
import Groups from './Groups'
import _ from 'lodash'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Filters from './Filters'
import { removeTask } from '../actions'

class Updates extends Component {

  state = {
    catFiltersOn: [],
    userFiltersOn: [],
    filteredTasks: _.values(this.props.allTasks),
    showFilterDrawer: false
  }

  showFilters = () => {
    if(this.state.catFiltersOn.length===0 && this.state.userFiltersOn.length===0) {
      this.setState({ filteredTasks: _.values(this.props.allTasks), showFilterDrawer: !this.state.showFilterDrawer})
    } else {
      this.setState({ showFilterDrawer: !this.state.showFilterDrawer })
    }
  }

  removeTask = (key) => {console.log(key)}
  // removeTask = (key) => {this.props.removeTask(key)}

  newRenderUpdates = () => {
    if (this.state.userFiltersOn.length > 0 || this.state.catFiltersOn.length > 0) {
      return (
        <Groups tasks={this.state.filteredTasks} removeTask={this.removeTask}/>
      )
    } else {
      return (
        <Groups tasks={_.values(this.props.allTasks)} removeTask={this.removeTask}/>
      )
    } 
  }

  userFilter = (filter) => {
    let newFilters = [...this.state.userFiltersOn]
    let newTasksProps = [..._.values(this.props.allTasks)]

    if (this.state.userFiltersOn.length===0 && this.state.catFiltersOn.length===0) {
      newFilters = newFilters.concat(filter)
      let newTasks = newTasksProps.filter( val => val.user_id===filter)
      this.setState({ filteredTasks: newTasks, userFiltersOn: newFilters})
    }

    else if (this.state.userFiltersOn.length>0 && this.state.catFiltersOn.length===0) {
      if (!newFilters.includes(filter)) {
        newFilters = newFilters.concat(filter)
        newTasksProps = newTasksProps.filter( val => newFilters.includes(val.user_id))
        this.setState({ filteredTasks: newTasksProps, userFiltersOn: newFilters})
      }

      else if (newFilters.includes(filter)) {
        newFilters = newFilters.filter(filters => filters !== filter)
        if (newFilters.length>0) {
          newTasksProps = newTasksProps.filter( val => newFilters.includes(val.user_id))
          this.setState({ filteredTasks: newTasksProps, userFiltersOn: newFilters})
        }
        
        else if (newFilters.length===0) { this.setState({ filteredTasks: newTasksProps, userFiltersOn: newFilters }) }

      }

    }

    else {
    // else if (this.state.userFiltersOn.length>0 && this.state.catFiltersOn.length>0) {
      if (!newFilters.includes(filter)) {
        newFilters = newFilters.concat(filter)
        let newTasksPropsNew = newTasksProps.filter( val => {
          for (let i=0; i<val.taskCategory.length; i++) {
            return this.state.catFiltersOn.includes(val.taskCategory[i])
          }
        })
        newTasksPropsNew = newTasksPropsNew.filter(val => newFilters.includes(val.user_id))
        this.setState({ filteredTasks: newTasksPropsNew, userFiltersOn: newFilters} )
      }

      else if (newFilters.includes(filter)) {
        newFilters = newFilters.filter(filters => filters !== filter)
          if (newFilters.length>0) {
            let newTasksPropsNew = newTasksProps.filter( val => {
              for (let i=0; i<val.taskCategory.length; i++) {
                return this.state.catFiltersOn.includes(val.taskCategory[i])
              }
            })
            newTasksPropsNew = newTasksPropsNew.filter(val => newFilters.includes(val.user_id))
            this.setState({ filteredTasks: newTasksPropsNew, userFiltersOn: newFilters })
          }

          else if (newFilters.length===0) {
          let newTasksPropsNew = newTasksProps.filter( val => {
            for (let i=0; i<val.taskCategory.length; i++) {
              return this.state.catFiltersOn.includes(val.taskCategory[i])
            }
          })
          this.setState({ filteredTasks: newTasksPropsNew, userFiltersOn: newFilters })
          }
        }
      }
    }

      catFilterNew = (filter) => {
        let newFilters = [...this.state.catFiltersOn]
        let newTasksProps = [..._.values(this.props.allTasks)]
        console.log(filter)
        if (this.state.catFiltersOn.length===0 && this.state.userFiltersOn.length===0) {
          newFilters = newFilters.concat(filter)
          let newTasks = newTasksProps.filter( val => (val.taskCategory===filter || val.taskCategory.includes(filter)))
          this.setState({ filteredTasks: newTasks, catFiltersOn: newFilters})
        }
    
        else if (this.state.catFiltersOn.length>0 && this.state.userFiltersOn.length===0) {
          if (!newFilters.includes(filter)) {
            newFilters = newFilters.concat(filter)
            newTasksProps = newTasksProps.filter( val => {
              for (let i=0; i<val.taskCategory.length; i++) {
                return newFilters.includes(val.taskCategory[i])
              }
            })
            this.setState({ filteredTasks: newTasksProps, catFiltersOn: newFilters})
          }
    
          else if (newFilters.includes(filter)) {
            newFilters = newFilters.filter(filters => filters !== filter)
            if (newFilters.length>0) {
              newTasksProps = newTasksProps.filter( val => {
                for (let i=0; i<val.taskCategory.length; i++) {
                  return newFilters.includes(val.taskCategory[i])
                }
              })
              this.setState({ filteredTasks: newTasksProps, catFiltersOn: newFilters})
            }
            
            else if (newFilters.length===0) { this.setState({ filteredTasks: newTasksProps, catFiltersOn: newFilters }) }
    
          }
    
        }
    
        else {
        // else if (this.state.catFiltersOn.length>0 && this.state.userFiltersOn.length>0) {
          if (!newFilters.includes(filter)) {
            newFilters = newFilters.concat(filter)
            let newTasksPropsNew = newTasksProps.filter( val => this.state.userFiltersOn.includes(val.user_id))
            newTasksPropsNew = newTasksPropsNew.filter( val => {
              for (let i=0; i<val.taskCategory.length; i++) {
                return newFilters.includes(val.taskCategory[i])
              }
            })
            this.setState({ filteredTasks: newTasksPropsNew, catFiltersOn: newFilters} )
          }
    
          else if (newFilters.includes(filter)) {
            newFilters = newFilters.filter(filters => filters !== filter)
              if (newFilters.length>0) {
                let newTasksPropsNew = newTasksProps.filter( val => this.state.userFiltersOn.includes(val.user_id))
                newTasksPropsNew = newTasksPropsNew.filter( val => {
                  for (let i=0; i<val.taskCategory.length; i++) {
                    return newFilters.includes(val.taskCategory[i])
                  }
                })
                this.setState({ filteredTasks: newTasksPropsNew, catFiltersOn: newFilters })
              }
    
              else if (newFilters.length===0) {
              let newTasksPropsNew = newTasksProps.filter( val => this.state.userFiltersOn.includes(val.user_id))
              this.setState({ filteredTasks: newTasksPropsNew, catFiltersOn: newFilters })
              }
            }
          }
        }


  render(){
    return (
      <div>
        <Typography variant='h4' color="primary">
          Here are your updates:
        </Typography>
        <Container>
          {this.newRenderUpdates()}
        <Box>
         <Button onClick={this.showFilters} color="primary" variant="outlined">Apply Filters</Button>
        </Box>
        <Drawer open={this.state.showFilterDrawer} onClose={this.showFilters}>
          <Filters handleUserFilter={this.userFilter} 
          handleCatFilter={this.catFilterNew}
          catFiltersOn={this.state.catFiltersOn}
          userFiltersOn={this.state.userFiltersOn}/>
        </Drawer>
      </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTask: (key) => dispatch(removeTask(key))
  }
}

export default connect(state => ({ allTasks: state.allTasks }))(Updates)