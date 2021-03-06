import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SetDetails from '../components/SetDetails';
import DetailsContainer from '../components/DetailsContainer';

class SetDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DetailsContainer>
      <View style={styles.viewStyle}>
        <SetDetails set={this.props.set} />
      </View>
      </DetailsContainer>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 60
  }
}

export default SetDetailsScreen;
