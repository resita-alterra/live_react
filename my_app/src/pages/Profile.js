import React from "react";
import Header from "./../components/Header";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "./../store";
import { Redirect } from "react-router-dom";

const Profile = props => {
  const is_login = props.is_login;
  const email = props.email;
  const username = props.username;
  const avatar = props.avatar;

  if (is_login === false) {
    return <Redirect to={{ pathname: "/login" }} />;
  } else {
    return (
      <div>
        <Header />
        <h2>Hello, {username}</h2>
        <img src={avatar} style={{ width: 100 }} />
        <p>username : {username}</p>
        <p>Email : {email}</p>
      </div>
    );
  }
};

export default connect(
  "is_login, username, email, avatar",
  actions
)(Profile);
