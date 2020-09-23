import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

const compareFunctionDESC = function (a, b) {
  var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};
const compareFunctionASC = function (a, b) {
  var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }

  // names must be equal
  return 0;
};

class OmdbContainer extends Component {
  state = {
    sortedresult: [],
    storeorder: "ASC",
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    API.search()
      .then(res => {
        console.log(res);
        this.setState({ result: res.data.results, sortedresult: res.data.results }, () => console.log(this.state))
      })
      .catch(err => console.log(err));
  }


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    }, () => console.log(this.state));
  };

  sortEmployees = (event) => {
    event.preventDefault();
    const directory = this.state.result;
    let order = this.state.storeorder;
    directory.sort(order === 'ASC' ? compareFunctionASC : compareFunctionDESC);
    if (order === 'ASC') {
      order = 'DESC';
    }
    else {
      order = 'ASC';
    }
    this.setState({ sortedresult: directory, storeorder: order });

  }
  

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Employee Directory"}
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Phone #</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.sortedresult.length ?
                    this.state.sortedresult
                      .filter(item =>
                        `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`.includes(this.state.search.toLowerCase())
                      )
                      .map((item, i) => (
                        <tr key={item.id.value}>
                          <th scope="row">{i}</th>
                          <td>{item.name.first}</td>
                          <td>{item.name.last}</td>
                          <td>{item.phone}</td>
                          <td>{item.email}</td>
                        </tr>

                      )
                      ) : (
                      <h3>No Results to Display</h3>
                    )}
                </tbody>
              </table>
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                sortEmployees={this.sortEmployees}

              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
