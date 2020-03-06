import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

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
      selectedItems: [{ name: 'Tokyo'}, { name: 'Toronto' }]
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%'
        }}
      />
    );
  };
  render() {
    return (

      <View style={Theme.appContainer}>
        <View style={Theme.headingContainer}>
          <Font
            size='xl'
            text='explore'
            weight='semi'
            transform='cap'
          />
        </View>
        <SearchableDropdown
          onItemSelect={(item) => {
            const items = this.state.selectedItems;
            items.push(item)
            this.setState({ selectedItems: items });
          }}
          containerStyle={{ padding: 5 }}
          onRemoveItem={(item, index) => {
            const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
            this.setState({ selectedItems: items });
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            borderColor: 'transparent',
            borderWidth: 1,
          }}
          items={items}
          itemTextStyle={{
            fontFamily: Common.REGULAR_FONT_STYLE,
            marginLeft: Common.LARGE_MARGIN
          }}
          resetValue={false}
          textInputProps={
            {
              placeholder: "Search City",
              placeholderTextColor: Common.GRAY,
              underlineColorAndroid: "transparent",
              style: {
                  margin: Common.LARGE_MARGIN,
                  borderBottomWidth: 1,
                  borderBottomColor: Common.LIGHT_GRAY,
                  fontFamily: Common.REGULAR_FONT_STYLE,
                  fontSize: Common.MID_FONT_SIZE
              },
            }
          }
          listProps={{ nestedScrollEnabled: true }}
        />
        <View style={Theme.center}>
          <Font
            style={{marginTop: Common.SMALL_MARGIN}}
            size='m'
            weight='semi'
            transform='cap'
            text='your local points'
          />
          <TouchableOpacity style={Theme.row} onPress={() => this.props.navigation.navigate('Points')}>
            <MaterialIcon
              name='info'
              alt='info'
              size={Common.MID_FONT_SIZE}
              style={{ color: Common.BLUE, marginRight: Common.EXTRA_SMALL_MARGIN }}
            />
            <Font
              color='blue'
              size='s'
              text='How this works?'
              weight='mid'
            />
          </TouchableOpacity>
          <Font
            style={{ marginTop: Common.SMALL_MARGIN }}
            size='l'
            weight='semi'
            transform='cap'
            text='2,020 points'
          />
          <TouchableOpacity style={Theme.smallButton}>
            <Font
                size='m'
                color="white"
                weight='semi'
                transform='cap'
                text='redeem'
            />
          </TouchableOpacity>
          <Image source={require('../assets/images/explore-illus.png')} style={Theme.illus} />
        </View>
      </View>
    );
  }
}

export default Explore;
