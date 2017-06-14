import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SetDetails from '../components/SetDetails';

class SetDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <SetDetails set={this.props.setInfo} />
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
