import React from 'react';
import { View } from 'react-native';
import SetList from '../components/SetList';

const SetListScreen = () => {
    return (
      <View style={styles.viewStyle}>
        <SetList />
      </View>
    );
}

const styles = {
  viewStyle: {
    marginTop: 60
  }
}

export default SetListScreen;
