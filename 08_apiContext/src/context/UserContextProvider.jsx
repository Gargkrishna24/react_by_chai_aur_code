import React from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({children})=>{ // ch ildren is generic jo ki astist aamge jaye
  const [user,setUser]=React.useState(null)
  return (
    <UserContext.provider value={{user,setUser}}>
    {children}
    </UserContext.provider>
  )
}
export default UserContextProvider;