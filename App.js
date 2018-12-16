import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import Styles from './Styles';
import AppNavigator from './navigation/AppNavigator';
import Reducer from './Reducer';

const store = createStore(Reducer, applyMiddleware(thunk));

export default class App extends React.Component {

  constructor() {
    super();
    this._allowAllScreenOrientations();
  }

  _allowAllScreenOrientations() {
    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={Styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
