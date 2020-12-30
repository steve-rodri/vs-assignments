import React, { Component } from 'react';
import { Navbar, Main, Footer } from './components';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
