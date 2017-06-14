import 'react-native'
import React from 'react';
import ArtistBox from '../src/components/ArtistBox';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
  <ArtistBox />
).toJSON();
expect(tree).toMatchSnapshot();
});
