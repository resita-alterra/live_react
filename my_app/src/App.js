import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "unistore/react";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/film/:category" component={Category} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
