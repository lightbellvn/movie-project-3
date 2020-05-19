import React, { Component } from "react";
import Menu from "./../../Components/Menu/Menu.js";
import Login from "../../Components/Signup_Login/SignIn";
import SignUpContainer from "../../Container/SignUpContainer";
import ScheduleMovie from "../../Components/SelectMovie/ScheduleMovie/ScheduleMovie";

export default class HomePage extends Component {
  render() {
    return (
      <div>        
        <Menu />
        <Login />
        <SignUpContainer />
        <ScheduleMovie />
      </div>
    );
  }
}
