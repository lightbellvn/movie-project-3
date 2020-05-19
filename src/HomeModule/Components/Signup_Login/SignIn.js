import React, { Component } from "react";
import "./signupStyle.css";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rememberMe: true,
    };
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    console.log(target.checked);
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    let { username, password, rememberMe } = this.state;
    return (
      <div className="container singup">
        <div className="modal" id="myModalLogin">
          <div className="signupform">
            <br />

            <div className="container">
              <div className="agile_info">
                <div className="w3l_form">
                  <div className="left_grid_info">
                    <img src="/img/loginBanner.jpg" alt="login" />
                  </div>
                </div>
                <div className="w3_info">
                  <button
                    type="button"
                    className="close closeModal"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times-circle"></i>
                  </button>

                  <h2>WellCome To SeaMovie</h2>
                  <p>Please sign in</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="input-group signIn">
                      <span>
                        <i className="fa fa-user mr-3" aria-hidden="true" />
                      </span>
                      <input
                        type="text"
                        placeholder="User Name"
                        name="username"
                        value={username}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="input-group signIn">
                      <span>
                        <i className="fa fa-lock mr-3" aria-hidden="true" />
                      </span>
                      <input
                        type="Password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="exampleCheck1"
                        className="form-check-input"
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={this.onChange}
                      />
                      <label className="form-check-label text-light">
                        Remember me
                      </label>
                    </div>
                    <button className="btn btn-danger mt-4 mb-3" type="submit">
                      Login
                    </button>
                  </form>
                  <p
                    className="account"
                    data-dismiss="modal"
                    data-target="#myModalLogin"
                  >
                    Already have an account ?
                    <a
                      href="#"
                      className="text-warning ml-3"
                      data-toggle="modal"
                      data-target="#myModalSignUp"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
