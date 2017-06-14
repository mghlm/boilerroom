import React from 'react';
import { Text, View, Image } from 'react-native';
import ArtistBox from './ArtistBox';

const ArtistName = ( {set} ) => {

  return (
    <ArtistBox>
      <View>
        <Text style={styles.titleTextStyle}>{set.artist.toUpperCase()}</Text>
      </View>
    </ArtistBox>
  );
};

const styles = {
  titleTextStyle: {
    fontSize: 30,
    color: "#FFF"
  }
}

export default ArtistName;
