import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SetListScreen from '../screens/SetListScreen';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={ styles.navStyle }>
      <Scene key='main' direction='leftToRight' >
        <Scene
          key='sets'
          component={ SetListScreen }
          title="ARTISTS" initial
        />
      </Scene>
    </Router>
  )
}

const styles = {
  navStyle: {
    backgroundColor: '#fff'
  }
}

export default RouterComponent;
