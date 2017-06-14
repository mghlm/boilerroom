import 'react-native'
import React from 'react';
import DetailsContainer from '../src/components/DetailsContainer';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<DetailsContainer />).toJSON();
expect(tree).toMatchSnapshot();
});
