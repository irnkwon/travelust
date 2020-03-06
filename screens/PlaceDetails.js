import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Modal } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

function Details() {
    return(
        <View style={[Theme.customWidth, { marginTop: Common.EXTRA_LARGE_MARGIN }]}>
            <View style={[Theme.row, { marginBottom: Common.SMALL_MARGIN }]}>
                <MaterialIcon name="phone" size={Common.LARGE_FONT_SIZE} color={Common.BLUE} />
                <Font
                    style={{ marginLeft: Common.EXTRA_SMALL_MARGIN }}
                    size='m'
                    weight='mid'
                    text='+82 64-727-1112'
                />
            </View>
            <View style={[Theme.row, { alignItems: 'flex-start' }]}>
                <MaterialIcon name="location-on" size={Common.LARGE_FONT_SIZE} color={Common.BLUE} />
                <View>
                    <Font
                        style={{ marginLeft: Common.EXTRA_SMALL_MARGIN }}
                        size='m'
                        weight='mid'
                        text='67 Samseong-ro, Ildoi-dong, Jeju-si, Jeju-do, South Korea'
                    />
                    <Font
                        style={{ marginTop: Common.EXTRA_SMALL_MARGIN }}
                        color='blue'
                        size='s'
                        weight='mid'
                        transform='upper'
                        text='show map'
                    />
                </View>
            </View>
        </View>
    );
}

function Reviews() {
    return(
        <View style={Theme.customWidth}>
        </View>
    );
}

class PlaceDetails extends Component {
  render() {
    return (
      <View style={[Theme.appContainer, { alignItems: 'center' }]}>
        <Image
            source={require('../assets/images/sisters-noodles-big.png')}
            style={{ width: 303, height: 212, marginTop: Common.EXTRA_EXTRA_LARGE_MARGIN }}
        />
        <Details />
        <TouchableOpacity style={[Theme.longButton, Theme.row, { position: 'absolute', bottom: Common.MID_MARGIN }]}>
            <MaterialIcon name="add" size={Common.LARGE_FONT_SIZE} color={Common.WHITE} />
            <Font
                style={{ marginLeft: Common.SMALL_MARGIN }}
                size='m'
                color="white"
                weight='semi'
                transform='cap'
                text='add to trip'
            />
        </TouchableOpacity>
      </View>
    );
  }
}

export default PlaceDetails;
