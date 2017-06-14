import 'react-native'
import React from 'react';
import SetList from '../src/components/SetList';
import { ScrollView } from 'react-native';

import renderer from 'react-test-renderer';

const setTest = {'image': 'test'};

test('renders correctly', () => {
  const tree = renderer.create(<SetList set={setTest}/>).toJSON();
expect(tree).toMatchSnapshot();
});
