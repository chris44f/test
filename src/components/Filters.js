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
        <List component='ul'>
          <Typography variant='h6' color='primary'>Apply Filters</Typography>
          <ListSubHeader component='ul'>
            <Typography variant='subtitle1' color='secondary'>
              By user
            </Typography>
          </ListSubHeader>
            {_.values(loginDetails).map(user => (
                <ListItem>
                  <ListItemText primary={user.username} />
                  <Checkbox checked={this.props.userFiltersOn.includes(user.user_id)} onClick={()=>this.props.handleUserFilter(user.user_id)}/>
                </ListItem>
            ))}
          <Divider />
          <ListSubHeader>
            <Typography variant='subtitle1' color='secondary'>
                By tag
            </Typography>
          </ListSubHeader>
            {this.props.allCats.map(cat => (
                <ListItem>
                  <ListItemText primary={cat} />
                  <Checkbox checked={this.props.catFiltersOn.includes(cat)} onClick={()=>this.props.handleCatFilter(cat)}/>
                </ListItem>
            ))}
        </List>
      </aside>
    )
  }
}

export default connect(state => ({ allCats: state.allCats }))(Filters)
