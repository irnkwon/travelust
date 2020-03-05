import React, { Component } from 'react';
import Intro from './screens/Intro';
import Explore from './screens/Explore'
import LocalPoints_Vol from './screens/LocalPoints_Vol'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Explore />
      </React.Fragment>
    );
  }
}

export default App;
