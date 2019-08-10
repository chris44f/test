import React, {Component} from 'react'
import { connect } from 'react-redux'
import Groups from './Groups'
import _ from 'lodash'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
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

  // renderUpdates = () => {
  //   if (this.state.userFiltersOn.length > 0 || this.state.catFiltersOn.length > 0) {
  //     return (
  //       this.state.filteredTasks.map(task => (
  //         <Update task={task}/>
  //       ))
  //     )
  //   } else {
  //     return (
  //       _.values(this.props.allTasks).map(task => (
  //         <Update task={task}/>
  //       ))
  //     )
  //   } 
  // }

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
        // stop here
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

    // catFilter = (filter) => {
    //   let newFilters = [...this.state.catFiltersOn]
    //   let newTasksProps = [..._.values(this.props.allTasks)]
    //   console.log(filter)
    //   if (this.state.catFiltersOn.length===0 && this.state.userFiltersOn.length===0) {
    //     newFilters = newFilters.concat(filter)
    //     let newTasks = newTasksProps.filter( val => (val.taskCategory===filter || val.taskCategory.includes(filter)))
    //     this.setState({ filteredTasks: newTasks, catFiltersOn: newFilters})
    //   }
  
    //   else if (this.state.catFiltersOn.length>0 && this.state.userFiltersOn.length===0) {
    //     if (!newFilters.includes(filter)) {
    //       newFilters = newFilters.concat(filter)
    //       newTasksProps = newTasksProps.filter( val => {newFilters.includes(val.taskCategory))
    //       this.setState({ filteredTasks: newTasksProps, catFiltersOn: newFilters})
    //     }
  
    //     else if (newFilters.includes(filter)) {
    //       newFilters = newFilters.filter(filters => filters !== filter)
    //       if (newFilters.length>0) {
    //         newTasksProps = newTasksProps.filter( val => newFilters.includes(val.taskCategory))
    //         this.setState({ filteredTasks: newTasksProps, catFiltersOn: newFilters})
    //       }
          
    //       else if (newFilters.length===0) { this.setState({ filteredTasks: newTasksProps, catFiltersOn: newFilters }) }
  
    //     }
  
    //   }
  
    //   else {
    //   // else if (this.state.catFiltersOn.length>0 && this.state.userFiltersOn.length>0) {
    //     if (!newFilters.includes(filter)) {
    //       newFilters = newFilters.concat(filter)
    //       let newTasksPropsNew = newTasksProps.filter( val => this.state.userFiltersOn.includes(val.user_id))
    //       newTasksPropsNew = newTasksPropsNew.filter(val => newFilters.includes(val.taskCategory))
    //       this.setState({ filteredTasks: newTasksPropsNew, catFiltersOn: newFilters} )
    //     }
  
    //     else if (newFilters.includes(filter)) {
    //       newFilters = newFilters.filter(filters => filters !== filter)
    //         if (newFilters.length>0) {
    //           let newTasksPropsNew = newTasksProps.filter( val => this.state.userFiltersOn.includes(val.user_id))
    //           newTasksPropsNew = newTasksPropsNew.filter(val => newFilters.includes(val.taskCategory))
    //           this.setState({ filteredTasks: newTasksPropsNew, catFiltersOn: newFilters })
    //         }
  
    //         else if (newFilters.length===0) {
    //         let newTasksPropsNew = newTasksProps.filter( val => this.state.userFiltersOn.includes(val.user_id))
    //         this.setState({ filteredTasks: newTasksPropsNew, catFiltersOn: newFilters })
    //         }
    //       }
    //     }
    //   }


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

  // addFilter = (type, filter) => {
  //   let newFilters = [...this.state.filtersOn]
  //   let fltrdTsks = [..._.values(this.props.allTasks)]
  //   switch(type){
  //     case "cat":
  //       if(!this.state.filtersOn.includes(filter)){
  //         newFilters = newFilters.concat(filter)
  //         fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.taskCategory))
  //         this.setState({filtersOn: newFilters, filteredTasks: fltrdTsks})
  //       } else {
  //         newFilters = newFilters.filter(filters => filters !== filter)
  //         fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.taskCategory))
  //         this.setState({filtersOn: newFilters, filteredTasks: fltrdTsks})
  //       }
  //       break;
  //     case "user":
  //       if(!this.state.filtersOn.includes(filter)){
  //         newFilters = newFilters.concat(filter)
  //         fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.user_id))
  //         this.setState({filtersOn: newFilters, filteredTasks: fltrdTsks})
  //       } else {
  //         newFilters = newFilters.filter(filters => filters !== filter)
  //         fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.user_id))
  //         this.setState({filtersOn: newFilters, filteredTasks: fltrdTsks})
  //       }
  //       break;
  //   }
  // } 

  // catFilterOld = filter => {
  //   let newFilters = [...this.state.catFiltersOn]
  //   let fltrdTsks = [..._.values(this.props.allTasks)]
  //     if( this.state.userFiltersOn.length>0) {
  //       let fltrdTsks = [...this.state.filteredTasks]
  //       if(!this.state.catFiltersOn.includes(filter)){
  //         newFilters = newFilters.concat(filter)
  //         fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.taskCategory))
  //         this.setState({catFiltersOn: newFilters, filteredTasks: fltrdTsks})
  //       } else {
  //         newFilters = newFilters.filter(filters => filters !== filter)
  //         if (newFilters.length>0) {
  //         fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.taskCategory))
  //         this.setState({catFiltersOn: newFilters, filteredTasks: fltrdTsks})
  //         } else {
  //           fltrdTsks = [..._.values(this.props.allTasks)]
  //           fltrdTsks = fltrdTsks.filter(val => this.state.userFiltersOn.includes(val.user_id))
  //          }
  //         }
  //     } else {
  //       if(!this.state.catFiltersOn.includes(filter)){
  //         newFilters = newFilters.concat(filter)
  //         fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.taskCategory))
  //         this.setState({catFiltersOn: newFilters, filteredTasks: fltrdTsks})
  //       } else {
  //         newFilters = newFilters.filter(filters => filters !== filter)
  //         fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.taskCategory))
  //         this.setState({catFiltersOn: newFilters, filteredTasks: fltrdTsks})
  //       }
  //     }
  //   }

// something like if userFiltersOn.length === 0 && catFiltersOn.length > 0,
//  then fltrdTsks = fltrdTsks.filter( val => this.state.catFiltersOn.includes(val.taskCategory))


  // userFilterOld = filter => {
  //   let newFilters = [...this.state.userFiltersOn]
  //   let fltrdTsks = [..._.values(this.props.allTasks)]
  //     // if (this.state.userFiltersOn.length===0 && this.state.catFiltersOn.length>0){
  //     //   fltrdTsks = fltrdTsks.filter(val => this.state.catFiltersOn.includes(val.taskCategory))
  //     //   this.setState({ filteredTasks: fltrdTsks})
  //     // } else {
  //       if( this.state.catFiltersOn.length>0) {
  //         let fltrdTsks = [...this.state.filteredTasks]
  //         if(!this.state.userFiltersOn.includes(filter)){
  //           newFilters = newFilters.concat(filter)
  //           fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.user_id))
  //           this.setState({userFiltersOn: newFilters, filteredTasks: fltrdTsks})
  //         } else {
  //           newFilters = newFilters.filter(filters => filters !== filter)
  //           if (newFilters.length>0) {
  //           fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.taskCategory))
  //           this.setState({catFiltersOn: newFilters, filteredTasks: fltrdTsks})
  //           } else {
  //             fltrdTsks = [..._.values(this.props.allTasks)]
  //             fltrdTsks = fltrdTsks.filter(val => this.state.userFiltersOn.includes(val.user_id))
  //          }
  //         }
  //       } else {
  //         if(!this.state.userFiltersOn.includes(filter)){
  //           newFilters = newFilters.concat(filter)
  //           fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.user_id))
  //           this.setState({userFiltersOn: newFilters, filteredTasks: fltrdTsks})
  //         } else {
  //           newFilters = newFilters.filter(filters => filters !== filter)
  //           fltrdTsks = fltrdTsks.filter( val => newFilters.includes(val.user_id))
  //           this.setState({userFiltersOn: newFilters, filteredTasks: fltrdTsks})
  //         }
  //       }
  //     }


  render(){
    return (
      <div>
        <Typography variant='h4'>
          Here are your updates:
        </Typography>
          {this.newRenderUpdates()}
        <Button onClick={this.showFilters}>Apply Filters</Button>
        <Drawer open={this.state.showFilterDrawer} onClose={this.showFilters}>
          <Filters handleUserFilter={this.userFilter} 
          handleCatFilter={this.catFilterNew}
          catFiltersOn={this.state.catFiltersOn}
          userFiltersOn={this.state.userFiltersOn}/>
        </Drawer>
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