import React from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const formSubmit = (e)=>{
    e.preventDefault()
    navigate('/login')
  }
  return (

    <div className='reg'>
  <div className="reg-form-body">
    <div className="row">
      <div className="reg-form-holder">
        <div className="reg-form-content">
          <div className="reg-form-items">
            <h3 className='text-center'>Register Today</h3>
            <p className='text-center'>Fill in the data below.</p>
            <form onSubmit={formSubmit} autoComplete='off' className="requires-validation" noValidate>
              <div className="col-md-12">
                <input className="form-control" type="text" name="name" placeholder="Username" required />
                <div className="valid-feedback">Username field is valid!</div>
                <div className="invalid-feedback">Username field cannot be blank!</div>
              </div>
              <div className="col-md-12">
                <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                <div className="valid-feedback">Email field is valid!</div>
                <div className="invalid-feedback">Email field cannot be blank!</div>
              </div>
              <div className="col-md-12">
                <div className="valid-feedback">You selected a position!</div>
                <div className="invalid-feedback">Please select a position!</div>
              </div>
              <div className="col-md-12">
                <input className="form-control" type="password" name="password" placeholder="Password" required />
                <div className="valid-feedback">Password field is valid!</div>
                <div className="invalid-feedback">Password field cannot be blank!</div>
              </div>
              <div className="col-md-12 mt-3">
                <input className="form-control" type="mobile" name="number" placeholder="Number" required />
              </div>
              <div className="col-md-12 mt-3">
                <input className="form-control" type="date" name="date" required />
                <div className="valid-feedback">Password field is valid!</div>
                <div className="invalid-feedback">Password field cannot be blank!</div>
              </div>
              <div className="col-md-12 mt-3">
                <label className="mb-3 mr-1">Gender: </label>
                <input type="radio" className="btn-check" name="gender" id="male" autoComplete="off" required />
                <label className="btn btn-sm btn-outline-secondary mx-2">Male</label>
                <input type="radio" className="btn-check" name="gender" id="female" autoComplete="off" required />
                <label className="btn btn-sm btn-outline-secondary">Female</label>
                {/* <input type="radio" className="btn-check" name="gender" id="secret" autoComplete="off" required />
                <label className="btn btn-sm btn-outline-secondary">Secret</label> */}
                <div className="valid-feedback mv-up">You selected a gender!</div>
                <div className="invalid-feedback mv-up">Please select a gender!</div>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                <label className="form-check-label">I confirm that all data are correct</label>
                <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
              </div>
              <div className="form-button mt-3">
                <button id="submit" type="submit" className="btn btn-primary">Register</button>
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
