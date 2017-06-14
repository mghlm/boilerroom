import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const ArtistBox = (props) => {
  return (
      <View style={styles.viewStyleBox}>
        {props.children}
      </View>
  );
};

const styles = {
  viewStyleBox: {
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: '#7d7d7d',
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
