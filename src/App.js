import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './components/HomeComponent';
import { theme } from './shared/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Home />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
