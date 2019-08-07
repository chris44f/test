import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Button from '@material-ui/core/Button'
import NewUpdate from './NewUpdate'
import Updates from './Updates'
import Filters from './Filters'
import _ from 'lodash'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Drawer from '@material-ui/core/Drawer'
import Create from '@material-ui/icons/Create'

class Home extends Component {

  state = {
    filtersOn: [],
    filteredTasks: _.values(this.props.allTasks),
    showUpdate: false,
    showFilterDrawer: false,
  }

  showFilters = () => {
    this.setState({ showFilterDrawer: !this.state.showFilterDrawer })
  }

  dialogTransition = () => {
    return <Slide direction='up' />
  }

  handleUpdate = () => {
    this.setState({ showUpdate: !this.state.showUpdate})
  }

  addFilter = filter => {
    if(!this.state.filtersOn.includes(filter)){
      let newFilters = [...this.state.filtersOn]
      newFilters = newFilters.concat(filter)
      this.setState({filtersOn: newFilters})
    } else {
      let newFilters = [...this.state.filtersOn]
      newFilters = newFilters.filter(filters => filters !== filter)
      this.setState({filtersOn: newFilters})
    }
    this.applyFilters()
  }

  applyFilters = () => {
    let fltrdTsks = [..._.values(this.props.allTasks)]
    // let fltrs = this.state.filtersOn
    // fltrs.forEach(fltr => {
    //   fltrdTsks = fltrdTsks.filter(val => {
    //     return val.taskCategory===fltr || val.user_id===fltr
    //   })
    // })
    // if(this.state.filtersOn.length===0){
    // } else {this.setState({ filteredTasks: fltrdTsks })}
    const fltrs = [...this.state.filtersOn]
    fltrdTsks = fltrdTsks.filter( val => fltrs.includes(val.taskCategory))
    this.setState({ filteredTasks: fltrdTsks })
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
        <Dialog onClose={this.handleUpdate} open={this.state.showUpdate}>
          <DialogTitle>Add an update</DialogTitle>
          <NewUpdate />
        </Dialog>
        {/* should Drawer and Filters actually be rendered in Updates? */}
        <Button onClick={this.showFilters}>Apply Filters</Button>
      <Drawer open={this.state.showFilterDrawer} onClose={this.showFilters}>
        <Filters handleFilter={this.addFilter} filtersOn={this.state.filtersOn}/>
      </Drawer>
      <Updates allTasks={ this.state.filtersOn.length>0 ? this.state.filteredTasks : _.values(this.props.allTasks)}/>
      {/* for some reason, adding tasks only show if rendering this.props one */}
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId,
    allTasks: state.allTasks,
  }
}

export default connect(mapStateToProps)(Home)