import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux'
import { WebBrowser } from 'expo';
import { Buffer } from 'buffer'

import Colors from '../constants/Colors';
import Constant from '../constants/Constant';
import Styles from '../Styles';
import BugProvider from './Bug/BugProvider';

class BugScreen extends React.Component {

  static navigationOptions = {
    title: Constant.TAB_TITLES.BUGS,
    headerStyle: {
      backgroundColor: Colors.purple,
    },
    headerTitleStyle: {
      color: Colors.white
    }
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.listBugs();
  }

  render() {
    const { bugs } = this.props;
    return (
      <View style={Styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this._getBugImage()}
          {this._getBugifyInfo()}
          {this._listBugs(bugs)}
        </ScrollView>
      </View>
    );
  }

  _getBugImage() {
    return (
      <View style={styles.bugifyImg}>
        <Image
          source={require('../assets/images/bug.png')}
          style={styles.welcomeImage}
        />
      </View>
    );
  }

  _getBugifyInfo() {
    return (
      <View style={styles.bugifyInfo}>
        <Text style={styles.bugifyInfoText}>
          Add issues and bugs you have faced in your development process and remember how to solve them
        </Text>
        <TouchableOpacity onPress={this._addBug} style={styles.addBugLink}>
          <Text style={styles.addBugLinkText}>Add Bug</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _listBugs(bugs) {
    return (
      <FlatList
        data={bugs}
        renderItem={this._bugItem}
        keyExtractor={(item, index) => index.toString()}>
      </FlatList>
    );
  }

  _bugItem({item}) {
    return (
      <View style={styles.bugsList}>
        <Image
          source={item.file ? {uri: `data:image/png;base64, ${Buffer.from(item.file).toString('base64')}`} : ''}
          style={styles.welcomeImage}
        />
        <Text style={styles.tabBarInfoText}>{item.title}</Text>
      </View>
    );
  }

  _addBug = () => {
  }

  _openBugifyWeb = () => {
    WebBrowser.openBrowserAsync('http://bugify.es');
  };
};

const styles = StyleSheet.create({
  bugifyInfoText: {
    marginBottom: 20,
    color: Colors.softGrey,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  bugifyImg: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  bugifyInfo: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  bugsList: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  addBugLink: {
    paddingVertical: 15,
  },
  addBugLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  }
});

const mapStateToProps = (state, props) => {
  return {
      bugs: state.BugReducer.bugs
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    listBugs: () => dispatch(BugProvider.listBugs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BugScreen);