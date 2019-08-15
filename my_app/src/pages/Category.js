import React from "react";
import Header from "./../components/Header";
import axios from "axios";
// this.props.match.params.category
const baseUrl = "https://api-todofancy.herokuapp.com/api/";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = { film: [] };
  }
  componentDidMount() {
    const self = this;
    axios
      .get(baseUrl + "movies")
      .then(function(response) {
        self.setState({
          film: response.data.movies.filter(function(item) {
            return item.Category == self.props.match.params.category;
          })
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      const self = this;
      axios
        .get(baseUrl + "movies")
        .then(function(response) {
          self.setState({
            film: response.data.movies.filter(function(item) {
              return item.Category == self.props.match.params.category;
            })
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {
    let listFilm = this.state.film;
    let ini = listFilm.map((elm, key) => {
      return (
        <li>
          <div className="col-md-12">
            <img src={elm.Poster} />
            <p>{elm.Title}</p>
            <p>{elm.Year}</p>
            <p>{elm.Synopsis}</p>
          </div>
        </li>
      );
    });
    return (
      <div>
        <Header />
        <ul>{ini}</ul>
      </div>
    );
  }
}

export default Category;
