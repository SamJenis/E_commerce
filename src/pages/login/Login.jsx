import React from 'react'
import './Login.css'
import { FaEnvelope, FaLock } from 'react-icons/fa'

const Login = () => {
  return (
    <div className='Login' style={{ backgroundImage: 'url(imagess/banner/image.jpg)' }}>

      <div className="wrapper">
        <form action="#">
          <h2>Login</h2>
          <div className="input-field">
            <input type="text" id="email" placeholder="Email" />
            <i

              style={{ color: "#666" }}
            ><FaEnvelope /></i>
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              placeholder="Password"
            />
            <i style={{ color: "#666" }}><FaLock /></i>
            <span id="errormsg"
            ><i
              className="fa-solid fa-circle-exclamation"
              style={{ color: "#eb0a0a; position: static" }}
            >
              </i>
              Min 7 characters
            </span>

          </div>
          <div className="forget">
            <label>
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className='buttonLogin' type="submit">Log In</button>

          <div class="register">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login