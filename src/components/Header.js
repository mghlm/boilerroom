import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Boiler Room Sets</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    position: 'relative',
  },
  textStyle: {
    fontSize: 40,
  }
};


export default Header;
