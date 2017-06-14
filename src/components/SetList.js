import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import ArtistName from './ArtistName';
import axios from 'axios';


class SetList extends Component {
  state = { sets: [] };

  componentWillMount() {
    axios.get('http://localhost:9000/')
      .then(response => this.setState({ sets: response.data }));
  }

  renderSets() {
    return this.state.sets.map(set =>
        <ArtistName key={set.title} set={set} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderSets()}
      </ScrollView>
    );
  }
};

export default SetList;
