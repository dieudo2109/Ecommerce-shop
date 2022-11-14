import React from 'react'

export default function Register() {

  return (
    <section  >
      <div className="container ">
        <div className="row justify-content-center">
          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>
          <form>
            <div className="row">
              <div className="d-flex col-6 col-sm-3s align-items-center mb-4">
                <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input type="text" id="form3Example1c" className="form-control" />
                  <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                </div>
              </div>

              <div className="d-flex col-6 col-sm-3s align-items-center mb-4">
                <i className="fa fa-envelope fa-lg me-3 fa-fw " ></i>
                <div className="form-outline flex-fill mb-0">
                  <input type="email" id="form3Example3c" className="form-control" />
                  <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="d-flex col-6 col-sm-3s align-items-center mb-4">
                <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input type="password" id="form3Example4c" className="form-control" />
                  <label className="form-label" htmlFor="form3Example4c">Password</label>
                </div>
              </div>

              <div className="d-flex col-6 col-sm-3s align-items-center mb-4">
                <i className="fa fa-key fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input type="password" id="form3Example4cd" className="form-control" />
                  <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                </div>
              </div>
            </div>
            <div className="form-check d-flex justify-content-center mb-5">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
              <label className="form-check-label" htmlFor="form2Example3">
                I agree all statements in <a href="#!">Terms of service</a>
              </label>
            </div>

          </form>



        </div>
      </div>
    </section>
  )
}
