import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import * as axios from 'axios';

import Styles from './Styles';
import AppNavigator from './navigation/AppNavigator';
import Reducer from './Reducer';

const store = createStore(Reducer, applyMiddleware(thunk));

export default class App extends React.Component {

  constructor() {
    super();
    this._setHeaders();
    this._allowAllScreenOrientations();
  }

  _setHeaders() {
    axios.defaults.headers.common['authorization'] = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Impvc2Vwb2wiLCJpYXQiOjE1NDQ5NTkyOTQsImV4cCI6MTU0NTk1OTI5NH0.djz77CWQeASvZd0B5iztZ1lpseumKGF25xLbdF4I4Ek';
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
