import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';
import Styles from '../assets/styles/Trip';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: moment(new Date()).format('YYYY-MM-DD')
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
      this.setState({
          selected: day.dateString
      });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: Common.WHITE }}>
        <View style={Theme.headingContainer}>
          <Font
            size='xl'
            text='trip'
            weight='semi'
            transform='cap'
          />
        </View>
        <Calendar
          style={Styles.calendar}
          theme={Styles.calendarTheme}
          monthFormat={'MMM yyyy'}
          markedDates={{
            [this.state.selected]: {
              selected: true,
              disableTouchEvent: true,
            },
            '2020-03-07': {
              marked: true
            },
            '2020-03-08': {
              marked: true
            },
            '2020-03-09': {
              marked: true
            }
          }}
          onDayPress={this.onDayPress}
        />
        {planDetails.map((i) => 
          <View style={Theme.boxContainer}>
            <View>
              <Font
                text={i.title}
                weight='semi'
                size='m'
              />
              <Font
                text={i.time}
                weight='mid'
                size='s'
                color='gray'
              />
            </View>
            <View style={[Theme.row, {marginTop: Common.SMALL_MARGIN}]}>
              <TouchableOpacity>
                <Font
                    style={{ marginRight: Common.MID_MARGIN }}
                    size='s'
                    color="blue"
                    weight='mid'
                    transform='upper'
                    text='see details'
                />                
              </TouchableOpacity>
              <TouchableOpacity>
                <Font
                    size='s'
                    color="blue"
                    weight='mid'
                    transform='upper'
                    text='edit'
                />                
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    );
  }
}

const planDetails = [
  {
    id: 1,
    title: 'Hamdeok Beach',
    icon: '',
    time: '10:00 AM to 12:00 PM'
  },
  {
    id: 2,
    title: 'Sisters Noodles',
    icon: '',
    time: '12:30 PM to 1:30 PM'
},
]

export default Trip;
