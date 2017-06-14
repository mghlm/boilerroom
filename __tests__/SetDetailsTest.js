import 'react-native'
import React from 'react';
import SetDetails from '../src/components/SetDetails';

import renderer from 'react-test-renderer';

const setTest = {'image': 'test', 'location': 'testCity', 'date': 'testMonth'};

test('renders correctly', () => {
  const tree = renderer.create(<SetDetails set={setTest}/>).toJSON();
expect(tree).toMatchSnapshot();
});
