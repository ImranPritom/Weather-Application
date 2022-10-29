import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
 
export default function Login() {
  const navigate = useNavigate()
  const formSubmit = (e)=>{
    e.preventDefault()
    navigate('/')
  }
  
  return (
    <div className='login'>
  <div className="login-form-body">
    <div className="row"> 
      <div className="login-form-holder">
        <div className="login-form-content">
          <div className="login-form-items">
            <h3>Login</h3>
            <form onSubmit={formSubmit} autoComplete='off' className="login-requires-validation" noValidate>
              <div className="col-md-12">
              </div>
              <div className="col-md-12">
                <input className="form-control" type="email" name="email" autocomplete='off' placeholder="E-mail Address" required />
              </div>
              <div className="col-md-12">
                <input className="form-control" type="password" name="password" placeholder="Password" required />

              </div>
              <div className="form-button mt-3">
                <button id="submit" type="submit" className="btn btn-primary">Login </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
