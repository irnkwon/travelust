import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login'
    }
  }
  
  render() {
    let { view } = this.state;
    if (view == 'sign up') {
      return (
        <View style={Theme.authContainer}>
          <Image source={require('../assets/images/logo.png')} alt='logo' style={Theme.logo} />
          <View style={[Theme.row, {marginBottom: Common.EXTRA_LARGE_MARGIN}]}>
            <TouchableOpacity                  
              style={{
                marginRight: Common.LARGE_MARGIN,
              }}
              onPress={() => this.setState({ view: 'login' })}
            >
              <Font
                size='m'
                weight='semi'
                transform='upper'
                text='login'
                color='gray'
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Font
                size='m'
                weight='semi'
                transform='upper'
                text='sign up'
                color='blue'
              />
            </TouchableOpacity>
          </View>
          <Font placeholder='Email address' text='' label='email id' input />
          <Font placeholder='Password' text='' label='password' input />
          <Font placeholder='Confirm Password' text='' label='confirm password' input />
          <TouchableOpacity style={Theme.button}>
            <Font
                size='m'
                color='white'
                weight='semi'
                transform='cap'
                text='sign up'
            />
          </TouchableOpacity>    
          <Font
              style={Theme.customTxtWidth}
              size='s'
              color='mint'
              text='By signing up, you agree with the Terms of Service and Privacy Policy'
              center
          />
        </View>
      );
    } else if (view == 'login') {
      return(
        <View style={Theme.authContainer}>
            <Image source={require('../assets/images/logo.png')} alt='logo' style={Theme.logo} />
            <View style={[Theme.row, {marginBottom: Common.EXTRA_LARGE_MARGIN}]}>
              <TouchableOpacity                  
                style={{
                  marginRight: Common.LARGE_MARGIN,
                }}
              >
                <Font
                  size='m'
                  weight='semi'
                  transform='upper'
                  text='login'
                  color='blue'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ view: 'sign up' })}>
                <Font
                  size='m'
                  weight='semi'
                  transform='upper'
                  text='sign up'
                  color='gray'
                />
              </TouchableOpacity>
            </View>
            <Font placeholder='Email address' text='' label='email id' input />
            <Font placeholder='Password' text='' label='password' password input />
            <Font
                size='s'
                text='Forgot password?'
                link
            />
            <TouchableOpacity
                style={Theme.button}
                onPress={() => this.props.navigation.navigate('MainScreens')}
            >
              <Font
                  size='m'
                  color='white'
                  weight='semi'
                  transform='cap'
                  text='login'
              />
            </TouchableOpacity>
        </View>
      );
    }
  }
}

export default Login;
