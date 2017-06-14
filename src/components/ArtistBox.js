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
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default ArtistBox;
