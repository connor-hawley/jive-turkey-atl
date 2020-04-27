import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Home from './components/HomeComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    );
  }
}

export default App;
