import React, { Component } from 'react';
import Nav from './components/Nav';

class App extends Component {


  componentDidMount(){
    this.props.pictures.map(picture => {
      const img = new Image();
      img.src = picture
    });
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
      </React.Fragment>
    );
  }
}

export default App;