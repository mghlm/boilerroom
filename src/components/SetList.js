import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';

class SetList extends Component {
  state = { sets: [] };

  componentWillMount() {
    axios.get('http://localhost:9000/')
      .then(response => this.setState({ sets: response.data }));
  }

  renderSets() {
    return this.state.sets.map(set =>
      <Text>{set.title}</Text>
    );
  }

  render() {
    return (
      <View>
        {this.renderSets()}
      </View>
    );
  }
};

export default SetList;
