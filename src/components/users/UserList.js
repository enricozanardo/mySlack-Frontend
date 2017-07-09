import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render(){

    var userList = this.props.users.map( user => {
      return <User user={user} key={user.id} />
    })

    return(
      <ul>{userList}</ul>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired
}

export default UserList;
