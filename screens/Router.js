import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import LoginScreen from './Login';
import IntroScreen from './Intro';
import ExploreScreen from './Explore';
import TripScreen from './Trip';
import AltersScreen from './Alters';
import ProfileScreen from './Profile';

import * as Common from '../assets/styles/Common';
import Font from '../assets/styles/Font';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreens() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="explore" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Trip"
                component={TripScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="airplanemode-active" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Alters"
                component={AltersScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="notifications" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="person" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
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
