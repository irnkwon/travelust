import React, { Component } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import Theme from '../assets/styles/Theme';
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
      <View>
        <Font
          size='xl'
          text='trip'
          weight='semi'
          transform='cap'
        />
        <Calendar
          style={Styles.calendar}
          theme={Styles.calendarTheme}
          monthFormat={'MMM yyyy'}
          markingType={'multi-dot'}
          markedDates={{
            [this.state.selected]: {selected: true, disableTouchEvent: true},
          }}
          onDayPress={this.onDayPress}
        />
      </View>
    );
  }
}

export default Trip;
