import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

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

    state = {
        isModalVisible: false
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    goToTripScreen = () => {
        this.props.navigation.navigate('Trip')
        this.setState({ isModalVisible: false });
    }

    render() {
        return (
        <View style={[Theme.appContainer, { alignItems: 'center' }]}>
            {/* modal */}
            <Modal isVisible={this.state.isModalVisible}>
            <View style={[Theme.modal]}>
                <Font
                    style={{ marginLeft: Common.SMALL_MARGIN, marginBottom: Common.SMALL_MARGIN }}
                    size='m'
                    weight='semi'
                    text='Choose date and time'
                />
                <View>
                    <View style={[Theme.row, { marginBottom: Common.SMALL_MARGIN }]}>
                        <IonIcons 
                            name="md-calendar" 
                            size={Common.EXTRA_LARGE_FONT_SIZE} 
                            color={Common.BLUE}
                            style={{ marginRight: Common.SMALL_MARGIN }}
                        />
                        <Font
                            size='s'
                            weight='mid'
                            text='12:30 PM to 1:30 PM'
                        />
                    </View>
                    <View style={Theme.row}>
                        <IonIcons 
                            name="md-time" 
                            size={Common.EXTRA_LARGE_FONT_SIZE} 
                            color={Common.BLUE}
                            style={{ marginRight: Common.SMALL_MARGIN }}
                        />
                        <Font
                            size='s'
                            weight='mid'
                            text='Mar 6, 2020'
                        />
                    </View>
                </View>
                <View style={[Theme.row, { marginLeft: 'auto', marginTop: Common.EXTRA_LARGE_MARGIN }]}> 
                    <TouchableOpacity onPress={this.goToTripScreen}>
                        <Font
                            style={{ marginRight: Common.SMALL_MARGIN }}
                            color='blue'
                            size='s'
                            weight='semi'
                            transform='cap'
                            text='confirm'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toggleModal}>
                        <Font
                            size='s'
                            weight='semi'
                            transform='cap'
                            text='cancel'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            </Modal>
            {/* modal ends */}

            <Image
                source={require('../assets/images/sisters-noodles-big.png')}
                style={{ width: 303, height: 212, marginTop: Common.EXTRA_EXTRA_LARGE_MARGIN }}
            />
            <Details />
            <TouchableOpacity 
                style={[
                    Theme.longButton, 
                    Theme.row, 
                    { 
                        position: 'absolute', 
                        bottom: Common.MID_MARGIN 
                    }
                ]}
                onPress={this.toggleModal}
            >
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
