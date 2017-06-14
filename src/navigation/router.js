import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SetListScreen from '../screens/SetListScreen';
import SetDetailsScreen from '../screens/SetDetailsScreen';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={ styles.navStyle } titleStyle={styles.titleStyle} sceneStyle={styles.backgroundStyle}>
      <Scene key='root' direction="leftToRight">
        <Scene
          key='sets'
          component={ SetListScreen }
          title="ARTISTS" initial
        />
      </Scene>

      <Scene key='setDetails' direction="rightToLeft">
        <Scene
          key='SetDetails'
          component={ SetDetailsScreen }
          title="SET"
          leftTitle="Back"
          onLeft={() => Actions.root()}
        />
      </Scene>
    </Router>
  )
}

const styles = {
  navStyle: {
    backgroundColor: '#000'

  },
  backgroundStyle: {
    backgroundColor: '#000'
  },
  titleStyle: {
    color: "#fff"
  }
}

export default RouterComponent;
