import React from 'react';
import { Text, View, Image } from 'react-native';
import ArtistBox from './ArtistBox';

const SetDetails = ( {set} ) => {

  return (
    <ArtistBox>
      <View>
        <Text>{set.title}</Text>
      </View>
    </ArtistBox>
  );
};

export default SetDetails;
