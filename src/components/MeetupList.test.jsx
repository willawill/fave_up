import React from 'react';
import { shallow } from 'enzyme';
import MeetupList from './MeetupList';

describe('search view', () => {
  let searchProps, wrapper;

  beforeEach(() => {
    searchProps = {
      showFavorites: false,
      query: 'foo',
      favorites: [1,2,3]
    }
    wrapper = shallow(<MeetupList {...searchProps} />)
  });

  it('renders the search title', () => {
    expect(wrapper.find('ListTitle').length).toEqual(1);
  });

  it('renders the SearchResults', () => {
    expect(wrapper.find('SearchResults').length).toEqual(1);
  })
})

describe('favorites view', () => {
  let favoriteProps, wrapper;

  beforeEach(() => {
    favoriteProps = {
      showFavorites: true,
      query: 'foo',
      favorites: [1,2,3]
    }
    wrapper = shallow(<MeetupList {...favoriteProps} />)
  });

  it('renders the Favorite title', () => {
    expect(wrapper.find('ListTitle').length).toEqual(1);
  });

  it('renders the MyFavorites', () => {
    expect(wrapper.find('MyFavorites').length).toEqual(1);
  })
})
