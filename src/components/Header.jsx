import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";

const Header = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Sản phẩm
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    Về chúng tôi
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Liên hệ
                  </NavLink>
                </li>
              </ul>
            </div>

            <NavLink
              className="navbar-brand mx-auto fw-bold d-flex justify-content-center"
              to="/"
            >
              APPLE STORE
            </NavLink>
            <div className="d-flex"> 
              <Login />
              <Signup />
              <CartBtn />
            </div>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <NavLink
            className="navbar-brand mx-auto fw-bold d-flex justify-content-center"
            to="/"
          >
            APPLE STORE
          </NavLink>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Sản phẩm
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Về chúng tôi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Liên hệ
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <Login />
              <Signup />
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
