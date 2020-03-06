import React, {Component} from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Theme from '../assets/styles/Theme';
import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

class SisterNoodlesDet extends Component {
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
                                <Icon name="phone"
                                 size={30}
                                  color={Common.BLUE}/>
                                  <Font
                                      size='s'
                                      weight='semi'
                                      text='  +82 64-727-112'
                                        />
                              </View>
                              <View style={[Theme.row, {marginRight: 'auto'}]}>
                                      <Icon name="search"
                                       size={30}
                                        color={Common.BLUE}/>
                                        <Font
                                            size='s'
                                            weight='semi'
                                            text='  67 Samseong-ro, Ildoi-dong, Jeju-si, Jeju-do, South Korea'
                                              />

                                </View>
                      <TouchableOpacity style={{marginRight: 'auto'}}>
                        <Font
                          size='s'
                          weight='semi'
                          transform='upper'
                          text='see map'
                          color='blue'
                        />
                      </TouchableOpacity>

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

export default SisterNoodlesDet;
