import React, { Component } from 'react';
import Router from './screens/Router';
import SearchCity from './screens/SearchCity'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <SearchCity />
        </React.Fragment>
    );
  }
}

export default App;
