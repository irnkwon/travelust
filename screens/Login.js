import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

class Login extends Component {
  render() {
    const view = 'sign up';
    if (view == 'sign up') {
      return (
        <View style={Theme.appContainer}>
          <View></View>
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
              size='m'
              color='mint'
              text='By signing up, you agree with the Terms of Service and Privacy Policy'
              center
          />
        </View>
      );
    } else if (view == 'login') {
      return(
        <View style={Theme.appContainer}>
            <Font placeholder='Email address' text='' label='email id' input />
            <Font placeholder='Password' text='' label='password' password input />
            <Font
                size='m'
                text='Forgot password?'
                link
            />
            <TouchableOpacity
                style={Theme.button}
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
