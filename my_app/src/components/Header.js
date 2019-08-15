import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import "../styles/Header.css";
import logoalta from "./../img/logo-ALTA.png";

function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-6">
            <div className="header-logo">
              <img src={logoalta} width="133.52px" />
            </div>
          </div>
          <div className="col-md-5 col-sm-6 align-items-center">
            <div className="float-right">
              <div className="header-menu">
                <nav className="navbar navbar-expand navbar-light justify-content-between">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => {
                          props.logout();
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default connect(
  "",
  actions
)(Header);
