import React, {Component} from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

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

class SearchCity extends Component {

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
        <ScrollView>
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
                   defaultIndex={4}
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

                <View style={[Theme.row, {marginBottom: Common.EXTRA_LARGE_MARGIN}]}>
                            <TouchableOpacity
                              style={{
                                marginRight: Common.LARGE_MARGIN,
                              }}
                            >
                              <Font
                                size='m'
                                weight='semi'
                                transform='cap'
                                text='all'
                                color='blue'
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={{ marginRight: Common.LARGE_MARGIN,
                                  }}
                                  >
                              <Font
                                  size='m'
                                  weight='semi'
                                  transform='cap'
                                  text='food'
                                  color='gray'
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={{
                                  marginRight: Common.LARGE_MARGIN,
                                }}>
                              <Font
                                  size='m'
                                  weight='semi'
                                  transform='cap'
                                  text='places to stay'
                                  color='gray'
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={{
                                marginRight: Common.LARGE_MARGIN,
                              }}>
                              <Font
                                  size='m'
                                  weight='semi'
                                  transform='cap'
                                  text='things to do'
                                  color='gray'
                              />
                            </TouchableOpacity>
              </View>
               <View style={[Theme.row, {marginBottom: Common.EXTRA_LARGE_MARGIN}]}>
               <Font
                   style={{marginRight: 'auto'}}
                   size='m'
                   weight='semi'
                   text='Top Local Picks'
                     />

                     <TouchableOpacity
                     style={{
                         marginLeft: Common.LARGE_MARGIN,
                       }}>
                       <Font
                           size='s'
                           weight='semi'
                           transform='cap'
                           text='Show All'
                           color='gray'
                       />
                     </TouchableOpacity>
               </View>
                <View style={[Theme.row, {marginBottom: Common.EXTRA_LARGE_MARGIN}]}>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <TouchableOpacity
                        style={{
                            marginLeft: Common.LARGE_MARGIN,
                          }}>
                         <Image source={require('../assets/images/sisters-noodles.png')}
                                         style={Theme.illus} />
                        </TouchableOpacity>
                        <Font
                           size='s'
                           weight='semi'
                           transform='cap'
                           text='sisters noodles'
                       />
                       <Font
                          size='xs'
                          weight='semi'
                          transform='upper'
                          text='food'
                          color='gray'
                      />
                    </View>
                    <View style={{flex:1, flexDirection:'column'}}>
                          <TouchableOpacity
                            style={{
                                marginLeft: Common.LARGE_MARGIN,
                              }}>
                             <Image source={require('../assets/images/Myeongjin_Jeonbok.png')}
                                             style={Theme.illus} />
                            </TouchableOpacity>
                        <Font
                           size='s'
                           weight='semi'
                           transform='cap'
                           text='myeongjin jeonbok'
                       />
                       <Font
                          size='xs'
                          weight='semi'
                          transform='upper'
                          text='food'
                          color='gray'
                      />
                    </View>
                  </View>

                  <View style={[Theme.row, {marginBottom: Common.EXTRA_LARGE_MARGIN}]}>
                     <Font
                         style={{marginRight: 'auto'}}
                         size='m'
                         weight='semi'
                         text='Others'
                           />

                           <TouchableOpacity
                           style={{
                               marginLeft: Common.LARGE_MARGIN,
                             }}>
                             <Font
                                 size='s'
                                 weight='semi'
                                 transform='cap'
                                 text='Show All'
                                 color='gray'
                             />
                           </TouchableOpacity>
                     </View>
                      <View style={[Theme.row, {marginBottom: Common.EXTRA_LARGE_MARGIN}]}>
                          <View style={{flex:1, flexDirection:'column'}}>
                              <TouchableOpacity
                              style={{
                                  marginLeft: Common.LARGE_MARGIN,
                                }}>
                               <Image source={require('../assets/images/hotel-regent-marine.png')}
                                               style={Theme.illus, {resizeMode: 'contain'}} />
                              </TouchableOpacity>
                              <Font
                                 size='s'
                                 weight='semi'
                                 transform='cap'
                                 text='regent marine hotel'
                             />
                             <Font
                                size='xs'
                                weight='semi'
                                transform='upper'
                                text='hotel'
                                color='gray'
                            />
                          </View>
                          <View style={{flex:1, flexDirection:'column'}}>
                                <TouchableOpacity
                                  style={{
                                      marginLeft: Common.LARGE_MARGIN,
                                    }}>
                                   <Image source={require('../assets/images/hamdeok-beach.png')}
                                                   style={Theme.illus} />
                                  </TouchableOpacity>
                              <Font
                                 size='s'
                                 weight='semi'
                                 transform='cap'
                                 text='hamdeok beach'
                             />
                             <Font
                                size='xs'
                                weight='semi'
                                transform='upper'
                                text='beach'
                                color='gray'
                            />
                          </View>
                        </View>
            </ScrollView>
      </View>
    );
  }
}

export default SearchCity;
