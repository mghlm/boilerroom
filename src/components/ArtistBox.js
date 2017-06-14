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
