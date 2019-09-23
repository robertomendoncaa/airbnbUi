import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from '../components/Explore/Category';
import Home from '../components/Explore/Home';
import Tag from '../components/Explore/Tag';

const { height, width } = Dimensions.get('window');

class Explore extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp',
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-20, 10],
      extrapolate: 'clamp',
    });
    this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [50, 30],
      extrapolate: 'clamp',
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: '#dddddd',
            }}
          >
            <View
              style={{
                alignItems: 'center',
                paddingLeft: 20,
                flexDirection: 'row',
                padding: 5,
                backgroundColor: 'white',
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS === 'android' ? 20 : null,
              }}
            >
              <Icon name="ios-search" size={26} style={{ marginRight: 15 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try new destination..."
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: '500',
                  backgroundColor: 'white',
                }}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                position: 'relative',
                top: this.animatedTagTop,
                opacity: this.animatedOpacity,
              }}
            >
              <Tag name="Guests" />
              <Tag name="Dates" />
            </Animated.View>
          </Animated.View>

          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } },
            ])}
          >
            <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingHorizontal: 20,
                }}
              >
                What can we help you find, Brazil?
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require('../assets/home.jpg')}
                    name="Home"
                  />
                  <Category
                    imageUri={require('../assets/experiences.jpg')}
                    name="Experiences"
                  />
                  <Category
                    imageUri={require('../assets/restaurant.jpg')}
                    name="Restaurant"
                  />
                  <Category
                    imageUri={require('../assets/home.jpg')}
                    name="Home"
                  />
                  <Category
                    imageUri={require('../assets/experiences.jpg')}
                    name="Experiences"
                  />
                  <Category
                    imageUri={require('../assets/restaurant.jpg')}
                    name="Restaurant"
                  />
                </ScrollView>
              </View>

              <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                  Introducing Airbnb Plus
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '300',
                    color: '#999',
                    marginTop: 10,
                  }}
                >
                  A new selection of homes verified for quality and comfort
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    source={require('../assets/home.jpg')}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'cover',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#ddd',
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  paddingHorizontal: 20,
                }}
              >
                Homes around the world
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
              >
                <Home
                  width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={4}
                />
                <Home
                  width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={4}
                />
                <Home
                  width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={4}
                />
                <Home
                  width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={4}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;
