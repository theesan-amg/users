import React from 'react'

class UserInfo extends React.Component {
  render() {
    return(
      <p>{this.props.name} {this.props.email} {this.props.website}</p>
    )
  }
}

export default UserInfo
