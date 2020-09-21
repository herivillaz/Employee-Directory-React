import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    API.search()
      .then(res => {
        console.log(res);
        this.setState({ result: res.data.results }, () => console.log(this.state))
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

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchMovies(this.state.search);
  // };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Employee Directory"}
            >
              {this.state.result.length ? 
                this.state.result
                  .filter(item => 
                    `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase() }`.includes(this.state.search.toLowerCase())
                  )
                  .map(item => (
                    <div className="list-group-item justify-content-between" key={item.id.value}>
                     {item.name.first}  {item.name.last}        {item.phone}     {item.email}
                    </div>
                  )
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
