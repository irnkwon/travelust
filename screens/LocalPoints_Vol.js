import React, {Component} from 'react';
import { View, Image, TouchableOpacity, FlatList, ListItem, TextInput, Text } from 'react-native';
import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [
        { name: 'Agra, India' },
        { name: 'Athens, Greece' },
        { name: 'Bangkok, Thailand' },
        { name: 'Dubai, UAE' },
        { name: 'Jeju, South Korea' },
        { name: 'Johor, Malaysia' },
        { name: 'Karachi, Pakistan' },
        { name: 'Kuala Lumpur, Malaysia' },
        { name: 'London, UK' },
        { name: 'New York, USA' },
        { name: 'Paris, France' },
        { name: 'Singapore, Singapore' },
        { name: 'Tokyo, Japan' },
        { name: 'Toronto, Canada' },
        { name: 'Vancouver, Canada' },
    ];

class Explore extends Component {

constructor(props) {
    super(props);

    this.state = {
       selectedItems: [
              {
                name: 'Tokyo',
              },
              {
                name: 'Toronto',
              }
            ]
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };
  render() {
    return (

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Font
              size='xl'
              weight='semi'
              text='Local Points'
                />
          <Font
           style={{marginRight: 'auto', textAlignVertical: 'top'}}
              size='m'
              weight='semi'
              color = 'blue'
              text='Step 1'
            />
            <Font
                size = 'm'
                weight = 'semi'
                text = 'Authenticate yourself as a local person with a piece of ID or other methods'
                />
                <Font
                style={{marginTop: Common.LARGE_MARGIN}}
                size = 's'
                color = 'grey'
                text = 'Go to Profile > Edit Profile > Authentication and follow the steps provided on the page . You will see a "Verified" badge over you name once you are authenticated'
                />
        <Image source={require('../assets/images/avatar-pic.png')}
                        style={Theme.illus} />
      </View>
    );
  }
}

export default Explore;
