import React from 'react';
import { View } from 'react-native';

const ArtistBox = (props) => {
  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  viewStyle: {
    borderWidth: 3,
    borderColor: '#000',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default ArtistBox;
