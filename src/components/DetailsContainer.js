import React, { Component } from 'react';
import { View } from 'react-native';

class DetailsContainer extends Component {
  render() {
    return (
      <View style={styles.DetailsContainer}>
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  DetailsContainer: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginTop: -10,
    marginBottom: 15
  }
};

export default DetailsContainer;
