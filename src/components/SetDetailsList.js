import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import axios from 'axios';

class SetDetailsList extends Component {
  constructor(props) {
    super(props);
    this.state ={
      sets: [];
    }
  };

  componentWillMount() {
    axios.get('http://localhost:9000/')
      .then(response => this.setState({ resopnse.data }));
  }

  renderSets() {
    this.state.sets.map(set =>
    <Text>{set.title}</Text>)
  }

  render() {
    <View>
      {this.renderSets()}
    </View>
  }
}

export default SetDetailsList;
