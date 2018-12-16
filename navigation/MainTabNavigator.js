import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BugScreen from '../screens/BugScreen';
import SnippetsScreen from '../screens/SnippetsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../constants/Colors';
import Constant from '../constants/Constant';

const HomeStack = createStackNavigator({
  Bug: BugScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (<Label name={Constant.TAB_TITLES.BUGS} focused={focused} />),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === Constant.PLATFORM.IOS
          ? 'ios-bug'
          : 'md-bug'
      }
    />
  ),
};

const SnippetsStack = createStackNavigator({
  Snippets: SnippetsScreen,
});

SnippetsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (<Label name={Constant.TAB_TITLES.SNIPPETS} focused={focused} />),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === Constant.PLATFORM.IOS ? 'ios-list' : 'md-list'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (<Label name={Constant.TAB_TITLES.PROFILE} focused={focused} />),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === Constant.PLATFORM.IOS ? 'ios-contact' : 'md-contact'}
    />
  ),
};

function Label({name, focused}) {
  return <Text style={{textAlign: 'center', fontSize: 10, color: focused ? Colors.tabIconSelected : Colors.tabIconDefault}}>{name}</Text>;
}

export default createBottomTabNavigator({
  HomeStack,
  SnippetsStack,
  ProfileStack,
});
