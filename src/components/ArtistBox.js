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
    backgroundColor: "#000",
    borderWidth: 3,
    borderColor: '#000',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default ArtistBox;
