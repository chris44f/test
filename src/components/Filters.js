import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginDetails } from '../static-data'
import _ from 'lodash'
import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListSubHeader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'

class Filters extends Component {

  render(){
    return(
      <aside>
        <List component='ul' dense>
          <Typography variant='h6'>Apply Filters</Typography>
          <ListSubHeader component='ul'>By user</ListSubHeader>
            {_.values(loginDetails).map(user => (
                <ListItem>
                  <ListItemText primary={user.username} />
                  <Checkbox checked={this.props.filtersOn.includes(user.user_id)} onClick={()=>this.props.handleFilter(user.user_id)}/>
                </ListItem>
            ))}
          <Divider />
          <ListSubHeader>By category</ListSubHeader>
            {this.props.allCats.map(cat => (
                <ListItem>
                  <ListItemText primary={cat} />
                  <Checkbox checked={this.props.filtersOn.includes(cat)} onClick={()=>this.props.handleFilter(cat)}/>
                </ListItem>
            ))}
        </List>
      </aside>
    )
  }
}

export default connect(state => ({ allCats: state.allCats }))(Filters)
