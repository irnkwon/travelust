import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Explore from './screens/Explore';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Explore />
      </View>
    );
  }
}

export default App;
