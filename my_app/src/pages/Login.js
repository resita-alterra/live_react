import React from "react";
import Header from "./../components/Header";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    const self = this;
    axios
      .post("https://api-todofancy.herokuapp.com/api/auth")
      .then(function(response) {
        console.log(response);
        self.props.setUser(response.data.user_data.username);
        self.props.setEmail(response.data.user_data.email);
        self.props.setAvatar(response.data.user_data.avatar);
        self.props.login();
        console.log(self.props);
        self.props.history.push("/profile");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <label for="nama">nama :</label>
          <input type="text" id="nama" />
          <br />
          <label for="email">password:</label>
          <input type="text" id="email" />
          <button type="submit" onClick={this.clickHandler}>
            Submit
          </button>
        </form>
        {/* <Route path="/home" component={Article} /> */}
      </div>
    );
  }
}

export default connect(
  "is_login,username,email,avatar",
  actions
)(Login);
