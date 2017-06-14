import React from 'react';
import { View, Text } from 'react-native';

const ArtistBox = () => {
  return (
    <View style={styles.viewStyle}>
      <Text>Hi</Text>
    </View>
  );
};

const styles = {
  viewsStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#000000',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default ArtistBox;
