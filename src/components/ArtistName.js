import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ArtistBox from './ArtistBox';
import { Actions } from 'react-native-router-flux';

const ArtistName = ( {set} ) => {

  return (
    <TouchableOpacity onPress={ () => Actions.setDetails( {set: set} ) }>
      <ArtistBox>
        <View>
          <Text style={styles.titleTextStyle}>
            {set.artist.toUpperCase()}
          </Text>
        </View>
      </ArtistBox>
    </TouchableOpacity>

  );
};

const styles = {
  titleTextStyle: {
    fontSize: 30,
    color: "#FFF",
    fontFamily: 'Helvetica'
  }
}

export default ArtistName;
