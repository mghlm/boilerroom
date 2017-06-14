import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinkBox from './LinkBox';


const SetDetails = ( {set} ) => {
  return (
    <View>

      <View style={styles.imageViewStyle}>
        <Image source={{ uri: set.image }} style={styles.imageStyle}/>
      </View>
      <View style={styles.textViewStyle}>
        {/* <Text style={styles.textStyle}>{set.title}</Text> */}
        <Text style={styles.textStyle}>{set.location.toUpperCase()} | {set.date.toUpperCase()}</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL( set.youtube_url ) }>
        <LinkBox>
          <Text style={styles.textStyle}>Youtube</Text>
        </LinkBox>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL( set.soundcloud_url ) }>
        <LinkBox>
          <Text style={styles.textStyle}>Soundcloud</Text>
        </LinkBox>
      </TouchableOpacity>
      <View style={styles.logoViewStyle}>
        <Image source={{ uri: set.logo }} style={styles.logoStyle} />
      </View>

    </View>
  );
}


const styles = {
  imageViewStyle: {
    marginTop: 20,
    height: 200,
    width: 400
  },
  imageStyle: {
      opacity: 0.9,
      height: 200,
      width: 600,
      flex: 1,
      width: null
  },
  logoViewStyle: {
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle: {
    height: 200,
    width: 200
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff'
  },
  textViewStyle: {
    marginLeft: 6,
    marginTop: 10,
  }
}
// const styles = {
//   recipeViewStyle: {
//     borderWidth: 0.5,
//     borderColor: '#DEDEDE',
//     height: 170,
//     borderRadius: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 20
//   },
//   imageViewStyle: {
//     height: 100,
//   },
//   imageStyle: {
//     opacity: 0.9,
//     height: 60,
//     width: 30,
//     flex: 1,
//     width: null
//   },
//   titleViewStyle: {
//     height: 70,
//   },
//   titleStyle: {
//     marginLeft: 10,
//     marginTop: 10
//   },
//   publisherStyle: {
//     marginLeft: 10,
//     marginTop: 10,
//     // fontStyle: 'italic'
//   },
// }

export default SetDetails;
