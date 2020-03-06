import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

class TravPoints extends Component {
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
            text='Go to local areas instead of the places that are packed with tourists.'
        />
        <Font
            style={{ marginVertical: Common.SMALL_MARGIN }}
            color='gray'
            size='s'
            weight='mid'
            text='Try places under “Top Local Picks” section or places with a “Local” label 
                that a verified local person recommends.'
        />
        <Image
            source={require('../assets/images/local-areas.png')}
            style={[Theme.pics, { alignSelf: 'center' }]}
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
            style={{ marginBottom: Common.SMALL_MARGIN }}
            size='m'
            weight='mid'
            text='Write a review on the app or share pictures to social media for the local places you visited.'
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
                text='Text reviews'
            />
        </View>
        <View style={Theme.row}>
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
                text='Reviews with pictures'
            />
        </View>
        <View style={[Theme.row, { alignItems: 'flex-start', marginBottom: Common.SMALL_MARGIN }]}>
            <Font
                style={{ marginRight: Common.EXTRA_SMALL_MARGIN }}
                color='blue'
                size='s'
                weight='mid'
                text='50 Points'
            />
            <Font
                color='gray'
                size='s'
                weight='mid'
                text='Sharing local place pictures to social media with #travelust hashtag'
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
            style={{ marginBottom: Common.SMALL_MARGIN }}
            size='m'
            weight='mid'
            text='You will get points once your reviews and social media pictures are authenticated!'
        />
        <Font
            color='gray'
            size='s'
            weight='mid'
            text='Go to Profile > Points > Social Media to request the points! 
                Reviews will be automatically authenticated by us without your request.'
        />
      </ScrollView>
    );
  }
}

export default TravPoints;
