import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (

    <div className="container-fluid">
      {/* <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                </ul>
            </nav> */}


      <nav className="navbarcustom navbar navbar-expand-lg bg-light py-3 px-2">
        <div className="container-fluid ">
          <Link className="navbar-brand col-8" to="/">
            <img
              src="/images/dr-logo.png"
              alt="Logo"
              width={400}
              height=""
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse col-4 px-3 justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About us
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>

            </div>
          </div>
        </div>
      </nav>



      <Outlet />


      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-9 d-flex align-items-center">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >

            </Link>
            <span className="mb-3 mb-md-0 text-muted">
              © 2023 DR Medical Foundation, All rights reserved
            </span>
          </div>
          <ul className="nav col-md-3 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link
                className="text-muted"
                to="https://www.facebook.com/profile.php?id=100093849614973&mibextid=ZbWKwL"
                target="_blank"
              >
                <img
                  width={40}
                  height={40}
                  src="https://img.icons8.com/color/40/facebook-new.png"
                  alt="facebook-new"
                />
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="text-muted"
                to="https://instagram.com/drmedicalfoundation?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
              >
                <img
                  width={40}
                  height={40}
                  src="https://img.icons8.com/fluency/40/instagram-new.png"
                  alt="instagram-new"
                />
              </Link>
            </li>
            <li className="ms-3">
              <Link
                className="text-muted"
                to="https://wa.me/917304755630 "
                target="_blank"
              >
                <img
                  width={40}
                  height={40}
                  src="https://img.icons8.com/color/40/whatsapp--v1.png"
                  alt="whatsapp--v1"
                />
              </Link>
            </li>
          </ul>
        </footer>
      </div>




      {/* live action buttons */}
      <div className="container-fluid">

        <div class=" clearfix">
          <Link to="tel:7304755630" target='_blank' ><img className="mobilelive d-lg-none d-xl-none" src="/images/icons8-call.gif" alt="" /></Link>
          <Link to="https://wa.me/7304755630" target='_blank'><img className="whatsapplive" src="/images/icons8-whatsapp.gif" alt="" /></Link>
        </div>
      </div>

    </div>





  )
}

export default Layout
