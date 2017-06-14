import React from 'react';
import { Text, View, Image } from 'react-native';
import ArtistBox from './ArtistBox';

const SetDetails = ( {set} ) => {

  return (
    <ArtistBox>
      <View>
        <Text style={styles.titleTextStyle}>{set.title}</Text>
      </View>
    </ArtistBox>
  );
};

const styles = {
  titleTextStyle: {
    fontSize: 20
  }
}

export default SetDetails;
