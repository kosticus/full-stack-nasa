import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello HR-ATX54!!!!",
      pic: {}
    };

    // Just because we can :)
    this.getAPOD = this.getAPOD.bind(this);
  }
  
  componentDidMount() {
    // this.getAPOD();
    this.getAPODReal();
  }

  getAPOD() {
    console.log('in the getAPOD function');
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.data)
      .then(picture => {
        console.log('picture', picture);
        this.setState({ pic: picture });
      })
      .catch(error => {
        console.error('Oh no! Something went wrong', error);
      });
  }

  getAPODReal() {
    console.log('in the getAPOD real function');
    axios.get('/api/picture')
      .then(response => response.data)
      .then(picture => {
        console.log('picture', picture);
        this.setState({ pic: picture });
      })
      .catch(error => {
        console.error('Oh no! Something went wrong', error);
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <img src={this.state.pic.url}></img>
      </div>
    );
  }
}
