import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello HRATX52!!!",
      picture: {}
    };

    this.getPicture = this.getPicture.bind(this);
    this.getPictureFromServer = this.getPictureFromServer.bind(this);
  }

  componentDidMount() {
    // this.getPicture();
    this.getPictureFromServer();
  }

  // Our client-based original request
  getPicture() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(data => {
        // data === picture object
        // console.log('here is some data?', data.explanation, data.title, data.url);
        // render picture to the DOM
        this.setState({ picture: data });
      })
      .catch(error => {
        console.error('something went wrong :(', error);
      });
  }

  // The version where we fetch the picture from the server
  getPictureFromServer() {
    fetch('http://localhost:4000/api/picture')
      .then(response => response.json())
      .then(data => {
        // data === picture object
        // console.log('here is some data?', data.explanation, data.title, data.url);
        // render picture to the DOM
        this.setState({ picture: data });
      })
      .catch(error => {
        console.error('something went wrong :(', error);
      });
  }

  render() {
    return (
      <div>
        {/* {this.getPicture()} -- Remember, we probably don't want to do this, as we are not returning HTML from getPicture */}
        <p>{this.state.message}</p>
        <h3>{this.state.picture.title}</h3>
        <p>{this.state.picture.explanation}</p>
        <img src={this.state.picture.url}></img>
      </div>
    );
  }
}
