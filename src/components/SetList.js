import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import SetDetails from './SetDetails';
import axios from 'axios';

class SetList extends Component {
  state = { sets: [] };

  componentWillMount() {
    axios.get('http://localhost:9000/')
      .then(response => this.setState({ sets: response.data }));
  }

  renderSets() {
    return this.state.sets.map(set =>
      <SetDetails key={set.title} set={set} />
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
