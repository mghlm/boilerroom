import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, WebView, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';


const SetDetails = ( {set} ) => {
  return (
    <View>

      <View style={styles.imageViewStyle}>
        <Image source={{ uri: set.image }} style={styles.imageStyle}/>
      </View>
      <Text style={styles.textStyle}>{set.title}</Text>
      <Text style={styles.textStyle}>{set.location} | {set.date}</Text>
      <FontAwesome>{Icons.chevronLeft}</FontAwesome>

    </View>
  )
}

const styles = {
  imageViewStyle: {
    height: 200,
    width: 150
  },

  imageStyle: {
      opacity: 0.9,
      height: 60,
      width: 30,
      flex: 1,
      width: null
  },
  textStyle: {
    color: '#fff'
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
