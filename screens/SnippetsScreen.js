import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import Constant from '../constants/Constant';
import Styles from '../Styles';

export default class SettingsScreen extends React.Component {
  
  static navigationOptions = {
    title: Constant.TAB_TITLES.SNIPPETS,
    headerStyle: {
      backgroundColor: Colors.purple,
    },
    headerTitleStyle: {
      color: Colors.white
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView></ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
