import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SetListScreen from '../screens/SetListScreen';
import SetDetailsScreen from '../screens/SetDetailsScreen';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={ styles.navStyle } sceneStyle={styles.backgroundStyle}>
      <Scene key='main' direction='leftToRight' >
        <Scene
          key='sets'
          component={ SetListScreen }
          title="ARTISTS" initial
        />
      </Scene>

      <Scene key='setDetails' direction='leftToRight' >
        <Scene
          key='SetDetails'
          component={ SetDetailsScreen }
          title="DETAILS"
        />
      </Scene>
    </Router>
  )
}

const styles = {
  navStyle: {
  },
  backgroundStyle: {
    backgroundColor: '#000'
  }
}

export default RouterComponent;
