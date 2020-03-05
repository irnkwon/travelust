import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

class Intro extends Component {
  render() {
    return (
      <View style={Theme.introContainer}>
        <Swiper
          activeDotColor={Common.BLUE}
          dotColor={Common.LIGHT_GRAY}
          dotStyle={Theme.dot}
          activeDotStyle={Theme.dot}
          autoplay
        >
          {introDetails.map((i) =>
            <View key={i.id} style={Theme.introContainer}>
              <Image source={i.img} style={Theme.illus} />
              <Font
                style={{marginTop: Common.LARGE_MARGIN}}
                size='xl'
                weight='semi'
                text={i.title}
              />
              <View style={Theme.customWidth}>
                  <Font
                      style={{marginBottom: Common.EXTRA_EXTRA_LARGE_MARGIN}}
                      size='m'
                      text={i.desc}
                      center
                  />
              </View>
            </View>
          )}
        </Swiper>
        <View style={{marginBottom: Common.EXTRA_EXTRA_LARGE_MARGIN}}>
          <TouchableOpacity 
              style={Theme.button}
              onPress={() => this.props.navigation.navigate('Login')}
          >
              <Font
                  size='m'
                  color="white"
                  weight='semi'
                  transform='cap'
                  text='get started'
              />                
          </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const introDetails = [
   {
       id: 1,
       title: 'Explore',
       img: require('../assets/images/intro-1.png'),
       desc: 'Search a city you would like to travel, try our unique local places, and get local points.'
   },
   {
       id: 2,
       title: 'Trip',
       img: require('../assets/images/intro-2.png'),
       desc: 'Add your places to your trip calendar, and manage all schedules in one place.'
   },
   {
       id: 3,
       title: 'Alters',
       img: require('../assets/images/intro-3.png'),
       desc: 'Get notifications in advance when your place is crowded. We will recommend you alternative places.'
   },
   {
       id: 4,
       title: 'Profile',
       img: require('../assets/images/intro-4.png'),
       desc: 'See how many local points you have collected. Claim your local points as a traveler and volunteer.'
   }
]

export default Intro;
