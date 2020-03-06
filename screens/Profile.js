import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

class Profile extends Component {
  render() {
    return (
      <ScrollView style={Theme.appContainer}>
        <View style={Theme.headingContainer}>
          <Font
            size='xl'
            text='profile'
            weight='semi'
            transform='cap'
          />
        </View>
        <View style={[Theme.headingContainer, Theme.row]}>
          <Image source={require('../assets/images/profile-avatar.png')} style={Theme.icons} />
          <View style={{ marginLeft: Common.SMALL_MARGIN }}>
            <View style={[Theme.labelContainer, Theme.center]}>
                <Font
                    size='m'
                    text='verified'
                    weight='mid'
                    transform='cap'
                    color='white'
                />
            </View>
            <Font
                size='m'
                text='irene kwon'
                weight='semi'
                transform='cap'
            />
            <Font
                size='m'
                text='2,020 points'
                weight='mid'
                transform='cap'
                color='blue'
            />
          </View>
        </View>
        {profileMenuDetails.map((i) =>
            <View key={i.id}>
              <View style={[Theme.line, Theme.customWidth, { alignSelf: 'center' }]}></View>
              {i.type == 'logout' ?
                (<TouchableOpacity 
                  style={[Theme.customWidth, { alignSelf: 'center', marginBottom: Common.EXTRA_LARGE_MARGIN }]}
                  onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Font
                        size='m'
                        text={i.name}
                        transform='cap'
                        color='blue'
                    />
                </TouchableOpacity>)
                : (<TouchableOpacity style={[Theme.customWidth, { alignSelf: 'center' }]}>
                    <Font
                        size='m'
                        text={i.name}
                        transform='cap'
                    />
                </TouchableOpacity>)
              }
            </View>
        )}
      </ScrollView>
    );
  }
}

const profileMenuDetails = [
    {
        id: 1,
        name: 'edit profile'
    },
    {
        id: 2,
        name: 'points'
    },
    {
        id: 3,
        name: 'settings'
    },
    {
        id: 4,
        name: 'privacy policy'
    },
    {
        id: 5,
        name: 'terms & conditions'
    },
    {
        id: 6,
        name: 'contact us'
    },
    {
        id: 7,
        name: 'app version'
    },
    {
        id: 8,
        name: 'logout',
        type: 'logout'
    }
]

export default Profile;
