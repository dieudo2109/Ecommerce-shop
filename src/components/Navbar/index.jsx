import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Register from '../Register/Register';
import { useSelector } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
export default function Navbar() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const state = useSelector((state) => state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-brand fs-4" to="/">
            <img height="60px" className="object-fit: cover;" src='./accsets/logo.png' alt='' />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-uppercase h6">

              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link" to="/products" >Products</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

            </ul>
            <div className="bottons">
              <NavLink to="/sign-in" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i> Login</NavLink>
              <button to="/register" type="button" onClick={toggle} className="btn btn-outline-dark ms-2" data-toggle="modal" data-target="#exampleModal" ><i className="fa fa-user-plus "></i> Register</button>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart "></i> Cart ({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <Modal isOpen={modal} toggle={toggle} size="lg" className="h-50" >
          <ModalBody>
            <Register />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Submit
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>


  )
}
