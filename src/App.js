import React from 'react'
import UserInfo from './components/UserInfo'
import users from './users.json'

class Users extends React.Component {
  render() {
    return (
      <>
        {users.map((user) => {
          return (
            <UserInfo
              name={user.name}
              email={user.email}
              website={user.website}
            />
          )
        })}
      </>
    )
  }
}

export default Users