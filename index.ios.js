import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import SetList from './src/components/SetList.js';
import Router from './src/navigation/Router';

const App = () => (
  <Router />
);



AppRegistry.registerComponent('boilerroom', () => App);
