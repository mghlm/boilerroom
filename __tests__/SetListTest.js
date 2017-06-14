import 'react-native'
import React from 'react';
import SetList from '../src/components/SetList';
import { ScrollView } from 'react-native';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
  <SetList />
).toJSON();
expect(tree).toMatchSnapshot();
});

test('renders one ScrollView component', () => {
  const wrapper = shallow(<SetList />);
  expect(wrapper.find(ScrollView).length).toBe(1);
});
