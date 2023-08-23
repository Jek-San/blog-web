import axios from "axios"
import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const { currentUser, login } = useContext(AuthContext)
  
  console.log(currentUser)
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate("/")
    } catch (err) {
      setErr(err.response.data)
    }
  }
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          name="username"
          required
          type="text"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          name="password"
          required
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err.message}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
