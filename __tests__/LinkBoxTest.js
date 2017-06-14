import 'react-native'
import React from 'react';
import LinkBox from '../src/components/LinkBox';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
  <LinkBox />
).toJSON();
expect(tree).toMatchSnapshot();
});
