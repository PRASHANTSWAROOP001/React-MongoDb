import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

function RegistrationPage() {

  const [registationData, setRegistrationData] = useState({
    username:"",
    password:""
  })

  const handleRegistration = (e) =>{
    const {name , value} = e.target;
    setRegistrationData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {

      const response = await axios.post("http://localhost:8000/register",registationData)
      console.log(response)

    } catch (error) {
      console.error("Error while sending Registration Data: ", error)
            
    }
    finally{
      setRegistrationData({
        username:"",
        password:""
      })
    }
  }
  return (
    <div>
      <h1>
        Registration Page
      </h1>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='username' name='username' required onChange={handleRegistration} />
        <input type="password" placeholder='password' name='password' required onChange={handleRegistration} />
        <button type='submit'>Register</button>
        <br />
        <p>Already Registerd ?</p>
         <Link to='/login'> <button>Login</button> </Link>
      </form>
    </div>
  )
}

export default RegistrationPage