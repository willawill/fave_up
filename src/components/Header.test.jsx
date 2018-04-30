import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders the meetup logo', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('.logo').length).toEqual(1);
});