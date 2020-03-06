import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

class VolPoints extends Component {
  render() {
    return (
      <ScrollView style={[Theme.appContainer, { paddingHorizontal: Common.EXTRA_LARGE_MARGIN }]}>
        {/* Step 1 */}
        <Font
            color='blue'
            size='l'
            weight='semi'
            transform='cap'
            text='step 1'
            style={{ marginTop: Common.EXTRA_LARGE_MARGIN }}
        />
        <Font
            size='m'
            weight='mid'
            text='Authenticate yourself as a local person with a piece of ID or other methods.'
            style={{ marginBottom: Common.SMALL_MARGIN }}
        />
        <Font
            color='gray'
            size='s'
            weight='mid'
            text='Go to Profile > Edit Profile > Authentication and follow the steps provided on the page. 
                You will see a “Verified” badge over your name once you are authenticated.'
        />
        <Image 
            source={require('../assets/images/points-profile.png')}
            style={{ width: 185, height: 139, alignSelf: 'center' }}
        />

        {/* Step 2 */}
        <Font
            color='blue'
            size='l'
            weight='semi'
            transform='cap'
            text='step 2'
            style={{ marginTop: Common.EXTRA_LARGE_MARGIN }}
        />
        <Font
            size='m'
            weight='mid'
            text='Found a unique local place? Recommend it to us and we will post the place for travelers.'
            style={{ marginBottom: Common.SMALL_MARGIN }}
        />
        <Font
            color='gray'
            size='s'
            weight='mid'
            text='Go to Profile > Points > Local Place to recommend a place and get the points!'
            style={{ marginBottom: Common.SMALL_MARGIN }}
        />
        <View style={Theme.row}>
            <Font
                style={{ marginRight: Common.EXTRA_SMALL_MARGIN }}
                color='blue'
                size='s'
                weight='mid'
                text='5 Points'
            />
            <Font
                color='gray'
                size='s'
                weight='mid'
                text='When a traveler write a review for your place'
            />
        </View>
        <View style={[Theme.row, { alignItems: 'flex-start' }]}>
            <Font
                style={{ marginRight: Common.EXTRA_SMALL_MARGIN }}
                color='blue'
                size='s'
                weight='mid'
                text='20 Points'
            />
            <Font
                color='gray'
                size='s'
                weight='mid'
                text='When a traveler write a review with pictures for your place '
            />
        </View>
        <View style={[Theme.row, { alignItems: 'flex-start' }]}>
            <Font
                style={{ marginRight: Common.EXTRA_SMALL_MARGIN }}
                color='blue'
                size='s'
                weight='mid'
                text='200 Points'
            />
            <Font
                color='gray'
                size='s'
                weight='mid'
                text='Recommending a local place to us that is not posted on the app'
            />
        </View>

        {/* Step 3 */}
        <Font
            color='blue'
            size='l'
            weight='semi'
            transform='cap'
            text='step 3'
            style={{ marginTop: Common.EXTRA_LARGE_MARGIN }}
        />
        <Font
            size='m'
            weight='mid'
            text='You will get points once your local place is authenticated and has reviews posted by travelers.'
        />
      </ScrollView>
    );
  }
}

export default VolPoints;
