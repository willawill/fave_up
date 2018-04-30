import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

it('renders the search bar', () => {
  const wrapper = shallow(<SearchBar />);
  expect(wrapper.find('input#query').length).toEqual(1);
  expect(wrapper.find('Button').length).toEqual(1);
});

it('triggers the handleSubmit', () => {
  const handleSubmitMock = jest.fn();
  const wrapper = shallow(<SearchBar handleSearch={handleSubmitMock} />);
  
  wrapper.find('Button').simulate('click', { preventDefault: e => {}});
  expect(handleSubmitMock.mock.calls.length).toBe(1);
})