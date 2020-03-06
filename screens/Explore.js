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
                    style={{marginRight: 'auto'}}
                    size='xl'
                    weight='semi'
                    text='Explore'
                      />
      <View style={{flexDirection: 'row'}}>
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
                     backgroundColor: '#ddd',
                     borderColor: '#bbb',
                     borderWidth: 1,
                     borderRadius: 5,
                   }}
                   itemTextStyle={{ color: '#222' }}
                   itemsContainerStyle={{ maxHeight: 140 }}
                   items={items}
                   resetValue={false}
                   textInputProps={
                     {
                       placeholder: "Search Here...",
                       underlineColorAndroid: "transparent",
                       style: {
                           padding: 12,
                           borderWidth: 1,
                           borderColor: '#ccc',
                           borderRadius: 5,
                       },
                     }
                   }
                   listProps={
                     {
                       nestedScrollEnabled: true,
                     }
                   }
               />
                </View>
          <Font
            style={{marginTop: Common.LARGE_MARGIN}}
              size='m'
              weight='semi'
              text='Your Local Points'
            />
            <Font
                color = 'blue'
                size = 'xs'
                text = 'How this works'
                />
                <Font
                    style={{marginTop: Common.LARGE_MARGIN}}
                      size='l'
                      weight='semi'
                      text='2,020 Points'
                    />
            <TouchableOpacity
               style={Theme.button}>
              <Font
                  size='m'
                  color="white"
                  weight='semi'
                  transform='cap'
                  text='redeem'
              />
          </TouchableOpacity>
        <Image source={require('../assets/images/explore-illus.png')}
                style={Theme.illus} />
      </View>
    );
  }
}

export default Explore;
