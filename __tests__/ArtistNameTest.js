import 'react-native'
import React from 'react';
import ArtistName from '../src/components/ArtistName';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
  <ArtistBox />
).toJSON();
expect(tree).toMatchSnapshot();
});
