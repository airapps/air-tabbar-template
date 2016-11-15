/**
 * Created by buhe on 2016/10/10.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  AppRegistry
} from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
  NavigationProvider
} from '@exponent/ex-navigation';
// import { Ionicons } from '@exponent/vector-icons';

import Router from './screens';

function getColor(isSelected) {
  return isSelected ? '#fff' : '#000';
}

export default class TabNavigationExample extends Component {
  static route = {
    navigationBar: {
      title: 'Tab Navigation',
    },
  };

  render() {
    return (
      <NavigationProvider router={Router}>
        <View style={styles.container}>
          <TabNavigation
          id="main"
          navigatorUID="main"
          initialTab="home">
          <TabItem
            id="home"
            title="Home"
            selectedStyle={styles.selectedTab}
            renderIcon={(isSelected) => <Image source={{uri:'http://www.freeiconspng.com/uploads/home-icon-png-home-house-icon-24.png'}} /> }>
            <StackNavigation
              id="home"
              navigatorUID="home"
              initialRoute={Router.getRoute('home')}
            />
          </TabItem>

          <TabItem
            id="posts"
            title="Posts"
            selectedStyle={styles.selectedTab}
            renderIcon={(isSelected) => <Image source={{uri:'http://www.freeiconspng.com/uploads/home-icon-png-home-house-icon-24.png'}} /> }>
            <StackNavigation
              id="posts"
              initialRoute={Router.getRoute('about')}
            />
          </TabItem>

          <TabItem
            id="profile"
            title="Profile"
            selectedStyle={styles.selectedTab}
            renderIcon={(isSelected) => <Image source={{uri:'http://www.freeiconspng.com/uploads/home-icon-png-home-house-icon-24.png'}} /> }>
            <StackNavigation
              id="profile"
              initialRoute={Router.getRoute('about')}
            />
          </TabItem>
        </TabNavigation>
        </View>
      </NavigationProvider>
    );
  }
  _renderTitle = (isSelected, title) => {
    return (
      <Text style={{color: getColor(isSelected)}}>
        {title}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  selectedTab: {
    backgroundColor: '#0084FF',
  },
});
AppRegistry.registerComponent('AirKit', () => TabNavigationExample);