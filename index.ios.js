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
} from 'react-native';
import {
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import { Ionicons } from '@exponent/vector-icons';

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

  _goToFirstTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('first');
    });
  };

  _goToSecondTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('second');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TabNavigation
          id="tab-navigation"
          navigatorUID="tab-navigation"
          initialTab="first">
          <TabNavigationItem
            id="first"
            title="First"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-boat-outline" size={24} color={getColor(isSelected)} />}>
            <StackNavigation
                id="home"
                navigatorUID="home"
                initialRoute={Router.getRoute('home')}
            />
          </TabNavigationItem>
          <TabNavigationItem
            id="second"
            title="Second"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-bulb-outline" size={24} color={getColor(isSelected)} />}>
             <StackNavigation
                id="home"
                navigatorUID="home"
                initialRoute={Router.getRoute('home')}
            />
          </TabNavigationItem>
          <TabNavigationItem
            id="third"
            title="Third"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-bowtie-outline" size={24} color={getColor(isSelected)} />}>
             <StackNavigation
                id="home"
                navigatorUID="home"
                initialRoute={Router.getRoute('about')}
            />
          </TabNavigationItem>
        </TabNavigation>
      </View>
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