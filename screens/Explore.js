import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
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
      selectedItems: null
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
            this.setState({ selectedItem: item.name });
          }}
          containerStyle={{ padding: 5 }}
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
        { this.state.selectedItem !== 'Jeju, South Korea' ?
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
          </View> : 
          <ScrollView>
            <View style={[Theme.row, Theme.center, { marginBottom: Common.LARGE_MARGIN }]}>
              <TouchableOpacity style={{ marginRight: Common.LARGE_MARGIN }}>
                <Font
                  size='m'
                  weight='semi'
                  transform='cap'
                  text='all'
                  color='blue'
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: Common.LARGE_MARGIN }}>
                <Font
                    size='m'
                    weight='mid'
                    transform='cap'
                    text='food'
                    color='gray'
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: Common.LARGE_MARGIN }}>
                <Font
                    size='m'
                    weight='mid'
                    transform='cap'
                    text='places to stay'
                    color='gray'
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: Common.LARGE_MARGIN }}>
                <Font
                    size='m'
                    weight='mid'
                    transform='cap'
                    text='things to do'
                    color='gray'
                />
              </TouchableOpacity>
            </View>
            <View style={[Theme.row]}>
              <Font
                style={{ marginLeft: Common.LARGE_MARGIN }}
                size='l'
                weight='semi'
                text='Top Local Picks'
              />
              <TouchableOpacity style={{ marginLeft: 'auto', marginRight: Common.LARGE_MARGIN }}>
                <Font
                  size='s'
                  weight='mid'
                  transform='upper'
                  text='Show All'
                  color='gray'
                />
              </TouchableOpacity> 
            </View>
            <View
              style={[
                Theme.row, 
                Theme.center, 
                { 
                  flexWrap: 'wrap', 
                  justifyContent: 'space-evenly',
                  marginTop: Common.SMALL_MARGIN 
                }
              ]}
            >
            {placeDetails.map((i) =>
              i.topPicks == true ?
              (<View key={i.id} style={{ marginBottom: Common.EXTRA_SMALL_MARGIN }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                  <Image
                    source={i.img} 
                    alt={i.name} 
                    style={{ 
                      width: 157, 
                      height: 110, 
                      marginBottom: Common.SMALL_MARGIN 
                    }}
                  />
                  <Font
                    size='m'
                    weight='semi'
                    transform='cap'
                    text={i.name}
                  />
                  <Font
                    size='s'
                    weight='mid'
                    transform='upper'
                    text={i.type}
                    color='gray'
                  />
                </TouchableOpacity>
              </View>) : null
            )}
            </View>
            <View style={[Theme.row, { marginTop: Common.LARGE_MARGIN }]}>
              <Font
                style={{ marginLeft: Common.LARGE_MARGIN }}
                size='l'
                weight='semi'
                text='Others'
              />
              <TouchableOpacity style={{ marginLeft: 'auto', marginRight: Common.LARGE_MARGIN }}>
                <Font
                  size='s'
                  weight='mid'
                  transform='upper'
                  text='Show All'
                  color='gray'
                />
              </TouchableOpacity> 
            </View>
            <View
              style={[
                Theme.row, 
                Theme.center, 
                { flexWrap: 'wrap', 
                  justifyContent: 'space-evenly',
                  marginTop: Common.SMALL_MARGIN 
                }
              ]}
            >
            {placeDetails.map((i) =>
              i.topPicks == false ?
              (<View key={i.id} style={{ marginBottom: Common.EXTRA_SMALL_MARGIN }}>
                <Image 
                  source={i.img} 
                  alt={i.name} 
                  style={{ 
                    width: 157, 
                    height: 110, 
                    marginBottom: Common.SMALL_MARGIN 
                  }}
                />
                <Font
                  size='m'
                  weight='semi'
                  transform='cap'
                  text={i.name}
                />
                <Font
                  size='s'
                  weight='mid'
                  transform='upper'
                  text={i.type}
                  color='gray'
                />
              </View>) : null
            )}
            </View>
          </ScrollView>
        }
      </View>
    );
  }
}

const placeDetails = [
  {
    id: 1,
    name: 'Sisters Noodles',
    img: require('../assets/images/sisters-noodles.png'),
    type: 'food',
    topPicks: true
  },
  {
    id: 2,
    name: 'Myeongjin Jeonbok',
    img: require('../assets/images/myeongjin-jeonbok.png'),
    type: 'food',
    topPicks: true
  },
  {
    id: 3,
    name: 'Hotel Regent Marine',
    img: require('../assets/images/hotel-regent-marine.png'),
    type: 'places to stay',
    topPicks: false
  },
  {
    id: 4,
    name: 'Hamdeok Beach',
    img: require('../assets/images/hamdeok-beach.png'),
    type: 'things to do',
    topPicks: false
  },
]

export default Explore;
