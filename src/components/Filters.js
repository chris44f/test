import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginDetails } from '../static-data'
import _ from 'lodash'

class Filters extends Component {

  render(){
    return(
      <div>
        <h5>Apply Filters</h5>
        <ul>By user
          {_.values(loginDetails).map(user => (
            <div>
              <li>{user.username}</li>
              <input type="checkbox" defaultValue="unchecked" onClick={()=>this.props.handleFilter(user.user_id)}/>
            </div>
          ))}
        </ul>
        <ul>By category
          {this.props.allCats.map(cat => (
            <div>
              <li>{cat}</li>
              <input type="checkbox" defaultValue="unchecked" onClick={()=>this.props.handleFilter(cat)}/>
          </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({ allCats: state.allCats }))(Filters)
