import 'react-native'
import React from 'react';
import SetList from '../src/components/SetList';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
  <SetList />
).toJSON();
expect(tree).toMatchSnapshot();
});
