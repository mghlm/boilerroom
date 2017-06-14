import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SetList from '../components/SetList';

class SetDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <SetDetailsList />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 60
  }
}

export default SetListScreen;
