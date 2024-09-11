import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

function LoginPage() {
  const [loginData, setLoginData] = useState("")
  const [password, setPassword] = useState("")

  const handleUserName = (e) => {
    setLoginData(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", { "username": loginData, "password": password })
      
      // Log entire response to inspect structure
      console.log("Response Data:", response.data)

      const { Success } = response.data

      if (Success) {
        console.log("Login Successfully:", Success)
      } else {
        console.log("Message Error Invalid Login/Password")
      }
    } catch (error) {
      console.error("Error happened while sending login data:", error)
    } finally {
      setLoginData("")
      setPassword("")
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name='username' 
          placeholder='userName' 
          required 
          value={loginData} 
          onChange={handleUserName} 
        />
        <input 
          type="password" 
          name='Password' 
          placeholder='Password' 
          required 
          value={password} 
          onChange={handlePassword} 
        />
        <button>Login</button>
        <br />
        <p>Not Registered? Register Yourself!</p>
        <Link to="/"><button>Registration</button></Link>
      </form>
    </div>
  )
}

export default LoginPage
