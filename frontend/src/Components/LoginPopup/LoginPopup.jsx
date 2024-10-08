import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
  const[currState, setCurrtState] = useState("Login")
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))

  }

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Enter Your Name" required/>}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Enter Your Email" required/>
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Enter Your Password" required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="   " required/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
         ?<p>Create a new account? <span onClick={()=>setCurrtState("Sign Up")}>Register here</span></p>
         :<p>Already have an account? <span onClick={()=>setCurrtState("Login")}>Login here</span></p>
        }

      </form>
    
      
    </div>  
  )
}

export default LoginPopup
