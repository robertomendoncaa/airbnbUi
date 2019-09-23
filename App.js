import React from 'react';
import { Image, YellowBox } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './src/screens/Explore';
import Saved from './src/screens/Saved';
import Inbox from './src/screens/Inbox';
import Trips from './src/screens/Trips';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Explore: {
        screen: Explore,
        navigationOptions: {
          tabBarLabel: 'EXPLORE',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search" color={tintColor} size={24} />
          ),
        },
      },
      Saved: {
        screen: Saved,
        navigationOptions: {
          tabBarLabel: 'SAVED',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart-empty" color={tintColor} size={24} />
          ),
        },
      },
      Trips: {
        screen: Trips,
        navigationOptions: {
          tabBarLabel: 'TRIPS',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('./src/assets/airbnb.png')}
              style={{ height: 24, width: 24, tintColor: tintColor }}
            />
          ),
        },
      },
      Inbox: {
        screen: Inbox,
        navigationOptions: {
          tabBarLabel: 'INBOX',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-chatboxes" color={tintColor} size={24} />
          ),
        },
      },
      Profile: {
        screen: Inbox,
        navigationOptions: {
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" color={tintColor} size={24} />
          ),
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        style: {
          paddingTop: 5,
          backgroundColor: 'white',
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 5,
        },
      },
    }
  )
);

console.disableYellowBox = true;
