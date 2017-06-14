import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const SetDetailsContainer = (props) => {
  return(
    <View>
      <Text>{props.title}</Text>
    </View>
  )
}

export default SetDetailsContainer;
