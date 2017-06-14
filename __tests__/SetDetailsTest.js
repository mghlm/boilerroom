import 'react-native'
import React from 'react';
import SetDetails from '../src/components/SetDetails';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
  <SetDetails />
).toJSON();
expect(tree).toMatchSnapshot();
});
