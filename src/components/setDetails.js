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
  imageStyle: {
      opacity: 0.9,
      height: 200,
      width: 600,
      flex: 1,
      width: null
  },
  imageViewStyle: {
    marginTop: 20,
    height: 200,
    width: 400
  },
  logoStyle: {
    height: 200,
    width: 200
  },
  logoViewStyle: {
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center'
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

export default SetDetails;
