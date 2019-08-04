import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import NewUpdate from './NewUpdate'
import Updates from './Updates'
import Filters from './Filters'
import _ from 'lodash'

class Home extends Component {

  state = {
    filtersOn: [],
    filteredTasks: _.values(this.props.allTasks)
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
    if(this.state.filtersOn.length > 0) {
      let fltrdTasks = [...this.state.filteredTasks]
      const fltrs = this.state.filtersOn
      fltrdTasks = fltrdTasks.filter(task => {
        fltrs.includes(task.user_id) || fltrs.includes(task.taskCategory)
      })
      this.setState({ filteredTasks: fltrdTasks })
    } else { this.setState({ filteredTasks: _.values(this.props.allTasks)})}
  }

  render(){
    console.log(this.state.filtersOn)
  return (
    <div>
      <Header user={this.props.currentUserId}/>
      <NewUpdate />
      <Filters handleFilter={this.addFilter}/>
      <Updates allTasks={this.state.filteredTasks}/>
      {/* <Updates allTasks={_.values(this.props.allTasks)}></Updates> */}
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