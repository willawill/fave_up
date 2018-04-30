import React from 'react';
import { mount } from 'enzyme';

import MyFavorites from './MyFavorites';

describe('MyFavorites', () => {
  let component, wrapper;

  describe('when the user has zeor favorites', () => {
    it('shows the empty state', () => {
      wrapper = mount(<MyFavorites favorites={[]} />)

      expect(wrapper.find('Meetup').length).toEqual(0);
    })  
  })
})

