import React, {Component} from 'react';


import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null
    };

  window.navigator.geolocation.getCurrentPosition(
    position => {
      this.setState({ lat: position.coords.latitude});
    }, 

    err => console.log(err)
  )

  }


  render ()  {
   return <div className="App">

      <h1>Hello {this.state.lat}</h1>

    </div>;
  }
}

export default App;