import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SetDetailsContainer from '../components/SetDetailsContainer';
import SetDetails from '../components/SetDetails';

class SetDetailsScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   setInfo: this.props.setInfo
    // }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <SetDetails set={this.props.setInfo} />
        {console.log(this.props.setInfo)}
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
