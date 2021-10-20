import React, { Component } from "react";
import axios from "axios";
import "./App.css";
const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

/*
- Fetch the APOD from NASA
  - use something like Axios to make the AJAX request
    axios.get()
  - look at the response to figure out how to move forward
- Get to render on the page
- Render image
- Render date and title of the picture
*/
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello HR-ATX59!!!!",
      picture: {}
    };

    // Let's check on this later
    this.getApodFromNasa = this.getApodFromNasa.bind(this);
    this.getApodFromServer = this.getApodFromServer.bind(this);
  }
  
  componentDidMount() {
    // this.getApodFromNasa();
    this.getApodFromServer();
  }

  getApodFromNasa() {
    axios.get(nasaUrl)
      .then(response => {
        // console.log('What is this something', response.data.hdurl);
        this.setState({ picture: response.data });
      })
      .catch(error => {
        console.error('Oh no!', error);
      });
  }

  getApodFromServer() {
    axios.get('/api/apod')
      .then(response => {
        // set state
        this.setState({ picture: response.data });
      })
      .catch(error => {
        console.error('Error fetching APOD from database', error);
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <p>{this.state.picture.date}</p>
        <p>{this.state.picture.explanation}</p>
        <img src={this.state.picture.hdurl}></img>
      </div>
    );
  }
}
