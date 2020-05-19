import React, { Component } from "react";
import "./NavBarStyle.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgHome: "",
      bgNews: "",
    };
  }
  onClick = (chart) => {
    let bgHome = this.state.bgHome;
    let bgNews = this.state.bgNews;
    if (chart === "home") {
      bgHome = "bgHome";
      bgNews = "";
    }
    if (chart === "news") {
      bgHome = "";
      bgNews = "bgNews";
    }
    this.setState({
      bgHome,
      bgNews,
    });
  };
  render() {
    let { bgHome, bgNews } = this.state;
    return (
      <div className="main-top">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-navi">
          <div className="container">
            <h1>
              <a
                className="navbar-brand font-weight-bold font-italic text-light h2"
                href="index.html"
              >
                <span className="h1">S</span>EA Movie
                <i className="fas fa-syringe" />
              </a>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse text-center text-light"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-lg-auto">
                <li
                  className={`nav-item active mt-lg-0 mt-3 ${bgHome}`}
                  onClick={() => this.onClick("home")}
                >
                  <a className="nav-link text-light">
                    HOME
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li
                  className={`nav-item mx-lg-4 my-lg-0 my-3 ${bgNews}`}
                  onClick={() => this.onClick("news")}
                >
                  <a className="nav-link text-light">NEWS</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light "
                    href="home"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    WHAT'S ON
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item scroll " href="services">
                      Services
                    </a>
                    <a className="dropdown-item " href="gallery.html">
                      Gallery
                    </a>

                    <div className="dropdown-divider" />
                    <a className="dropdown-item " href="single.html">
                      Single Page
                    </a>
                  </div>
                </li>
                <li className="nav-item mx-lg-4 my-lg-0 my-3">
                  <a className="nav-link text-light " href="appointment.html">
                    SHORTCODES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light " href="contact.html">
                    CONTACT US
                  </a>
                </li>
              </ul>
              <a
                href="home"
                className="login-button ml-lg-5 mt-lg-0 mt-4 mb-lg-0 mb-3"
                data-toggle="modal"
                data-target="#myModalLogin"
              >
                <i className="	fa fa-sign-in mr-2 pb-2 " />
                SIGN IN
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
