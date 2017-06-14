import React from 'react';
import { AppRegistry } from 'react-native';
import SetList from './src/components/SetList.js';
import Router from './src/navigation/Router';

const App = () => (
  <Router />
);



AppRegistry.registerComponent('boilerroom', () => App);
