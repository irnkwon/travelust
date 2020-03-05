import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

class Alters extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: Common.WHITE }}>
        <View style={[Theme.headingContainer, Theme.row]}>
          <Font
            size='xl'
            text='alters'
            weight='semi'
            transform='cap'
          />
          <View style={Theme.iconContainer}>
            <Icon name="trash" size={30} />
          </View>
        </View>
        <View style={Theme.subHeadingContainer}>
          <Font
            size='l'
            text='today'
            weight='semi'
            transform='cap'
          />
        </View>
        {planDetails.map((i) => 
          <View style={Theme.boxContainer} key={i.id}>
            <View>
              <View style={[Theme.row, {marginBottom: Common.SMALL_MARGIN}]}>
                <Font
                  text={i.title}
                  weight='mid'
                  size='m'
                />
                <Font
                  style={{ marginLeft: 'auto' }}
                  text={i.time}
                  weight='mid'
                  size='xs'
                />
              </View>
              <Font
                text={i.desc}
                weight='mid'
                size='s'
                color='gray'
              />
            </View>
            { i.type == 'alternative' ? 
            <View style={[Theme.row, {marginTop: Common.SMALL_MARGIN}]}>
              <TouchableOpacity>
                <Font
                    style={{ marginRight: Common.MID_MARGIN }}
                    size='s'
                    color="blue"
                    weight='mid'
                    transform='upper'
                    text='show places'
                />                
              </TouchableOpacity>
            </View> : null }
          </View>
        )}
      </ScrollView>
    );
  }
}

const planDetails = [
  {
    id: 1,
    title: 'Hamdeok Beach is crowded',
    desc: 'Would you like to try alternative places we recommend? Let’s avoid crowded place!',
    type: 'alternative',
    time: '2h'
  },
  {
    id: 2,
    title: 'You’ve earned 20 points!',
    desc: 'Your review has been authenticated. Thank you for sharing your thoughts on a local establishment.',
    type: 'review',
    time: '5h'
  }
]

export default Alters;
