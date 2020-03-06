import React, {Component} from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

class SisterNoodlesRev extends Component {
 render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
             <Font
                size='xl'
                weight='semi'
                text='Sisters Noodles'
                  />
                    <Image source={require('../assets/images/sisters-noodles.png')}
                                 style={Theme.illus} />
                    <View style={[Theme.row, {marginRight: 'auto'}]}>
                                <Icon name="star"
                                 size={30}
                                  color={Common.BLUE}/>
                                  <Font
                                      size='m'
                                      weight='semi'
                                      text='  4.0 out of 5.0'
                                        />
                              </View>
                              <View style={[Theme.row, {marginTop: Common.LARGE_MARGIN}, {marginRight: 'auto'}]}>
                                        <Font
                                            size='m'
                                            weight='semi'
                                            text='Fahad Siddiqui'
                                            color='gray'
                                              />
                                  </View>
                                  <View style={[Theme.iconContainer,{alignItems: 'flex-end'}]}>
                                                                      <View style={[Theme.row]}>
                                                                                <Icon name="star" size={10} />
                                                                                <Icon name="star" size={10} />
                                                                                <Icon name="star" size={10} />
                                                                                <Icon name="star" size={10} />
                                                                  </View>
                                                               </View>
                                <View style={[Theme.row, {marginRight: 'auto'}, {marginTop: Common.LARGE_MARGIN}]}>
                      <TouchableOpacity style={{marginRight: 'auto'}}>
                        <Font
                          size='m'
                          weight='semi'
                          text='Amazing food and great service'
                        />
                      </TouchableOpacity>
                      </View>
              <TouchableOpacity
                 style={Theme.button}>
                <Font
                    size='m'
                    color="white"
                    weight='semi'
                    transform='cap'
                    text='+ add to trip'
                />
              </TouchableOpacity>
      </View>
      );
    }
  }

export default SisterNoodlesRev;
