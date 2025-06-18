import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const  [userName, setuserName] = useState("")
  const  [Password, setPassword] = useState("")
  const {setuser} =useContext(UserContext)
  const handleSubmit=(e)=>{
    e.preventaDefaulr();
    setuser({userName,Password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='UserName'
      value={userName} 
      onChange={(e)=> setPassword(e.target.value)}/>
      <input type="text" placeholder='Password' 
      value={Password} 
      onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login