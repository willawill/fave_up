import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('App', () => {
  let component, wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
    component = wrapper.insatance();
  });

  it('toggles between favorite and search results', () => {
    wrapper.find('ToggleFavoriteView').simulate('click');
    expect(wrapper.find('MyFavorites').length).toEqual(1);
  })

})

describe('show search only', () => {

})
