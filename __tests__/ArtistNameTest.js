import 'react-native'
import React from 'react';
import ArtistName from '../src/components/ArtistName';
// import { TouchableOpacity } from 'react-native'
// import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';


const testSet = {"artist": "test"};

test('renders correctly', () => {
  const tree = renderer.create(<ArtistName set={testSet}/>).toJSON();

expect(tree).toMatchSnapshot();
});
