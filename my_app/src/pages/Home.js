import React from "react";
import Header from "./../components/Header";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p style={{ display: "block" }}>Romance</p>
              <img src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" />
              <Link to="film/romance">
                <button>See Movies</button>
              </Link>
            </div>
            <div className="col-md-3">
              <p style={{ display: "block" }}>Action</p>
              <img src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" />
              <Link to="film/action">
                <button>See Movies</button>
              </Link>
            </div>
            <div className="col-md-3">
              <p style={{ display: "block" }}>Fiction</p>
              <img src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg" />
              <Link to="film/fiction">
                <button>See Movies</button>
              </Link>
            </div>
            <div className="col-md-3">
              <p style={{ display: "block" }}>Comedy</p>
              <img src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" />
              <Link to="film/comedy">
                <button>See Movies</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
