import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';

import MyFavorites from './MyFavorites';

describe('MyFavorites', () => {
  let component, wrapper;
  beforeEach(() => {
    wrapper = mount(<MyFavorites userId={1} />)
  });

  component = wrapper.instance();
  
  describe('when the user has zeor favorites', () => {
    it('shows the empty state', () => {
      
    })  
  })		
})

