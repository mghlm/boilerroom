import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SetDetailsContainer from '../components/SetDetailsContainer';

class SetDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <SetDetailsContainer />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 60
  }
}

export default SetDetailsScreen;
