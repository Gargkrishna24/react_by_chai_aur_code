import React, { useContext } from 'react'

function Profile() {
  
    const {user}=useContext

  if(!user) return <div>Please login</div>
  return <div>Welcome {user.userName}</div>
}

export default Profile