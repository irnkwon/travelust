import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import LoginScreen from './Login';
import IntroScreen from './Intro';
import ExploreScreen from './Explore';
import TravPointsScreen from './TravPoints';
import VolPointsScreen from './VolPoints';
import TripScreen from './Trip';
import AltersScreen from './Alters';
import ProfileScreen from './Profile';

import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function PointsScreens() {
    return(
        <TopTab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontFamily: Common.MID_FONT_STYLE,
                    fontSize: Common.MID_FONT_SIZE,
                    textTransform: 'none'
                },
                indicatorStyle: {
                    borderWidth: 1.5,
                    borderColor: Common.BLUE
                }
            }}
        >
            <TopTab.Screen 
                name="TravPoints"
                component={TravPointsScreen} 
                options={{
                    title: 'Travelers'
                }}
            />
            <TopTab.Screen
                name="VolPoints"
                component={VolPointsScreen}
                options={{
                    title: 'Volunteers'
                }}
            />
        </TopTab.Navigator>
    );
}

function ExploreScreens() {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: Common.SEMI_FONT_STYLE,
                    fontSize: Common.LARGE_FONT_SIZE
                }
            }}
        >
            <Stack.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    headerTransparent: true,
                    title: null
                }}
            />
            <Stack.Screen 
                name="Points"
                component={PointsScreens}
                options={{
                    title: 'Local Points'
                }}
            />
        </Stack.Navigator>
    );
}

function MainScreens() {
    return (
        <BottomTab.Navigator
            tabBarOptions={{
                activeTintColor: Common.BLUE,
                inactiveTintColor: Common.GRAY,
                labelStyle: {
                    fontFamily: Common.MID_FONT_STYLE
                },
                keyboardHidesTabBar: true
            }}
        >
            <BottomTab.Screen
                name="Explore"
                component={ExploreScreens}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="explore" color={color} size={size} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Trip"
                component={TripScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="airplanemode-active" color={color} size={size} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Alters"
                component={AltersScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="notifications" color={color} size={size} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="person" color={color} size={size} />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

class Router extends Component {
  render() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleStyle: {
                        fontFamily: Common.SEMI_FONT_STYLE,
                        fontSize: Common.LARGE_FONT_SIZE
                    }
                }}
            >
                <Stack.Screen 
                    name="Intro"
                    component={IntroScreen}
                    options={{
                        headerTransparent: true,
                        title: null,
                        headerRight: ({ navigation }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('MainScreens')}>
                            <Font
                                style={{marginTop: Common.LARGE_MARGIN, marginRight: Common.LARGE_MARGIN}}
                                size='m'
                                weight='semi'
                                transform='upper'
                                text='skip'
                            />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen}
                    options={{
                        title: "Welcome Back"
                    }}
                />
                <Stack.Screen 
                    name="MainScreens" 
                    component={MainScreens}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

export default Router;
