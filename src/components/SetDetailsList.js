import React, { Component } from 'react';
import { Text, ScrollView, TouchableHighlight } from 'react-native';
import axios from 'axios';

class SetDetailsList extends Component {
  constructor(props) {
    super(props);
    this.state ={
      sets: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:9000/')
      .then(response => this.setState({ sets: response.data }));
  }

  renderSets() {
    return this.state.sets.map(set =>
    <Text>{set.title}</Text>)
  }

  render() {
    <ScrollView>
      {this.renderSets()}
    </ScrollView>
  }
}

export default SetDetailsList;
