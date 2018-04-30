import React from 'react';
import styled from 'styled-components';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Section from 'meetup-web-components/lib/layout/Section';
import ListTitle from './ListTitle';
import PropTypes from 'prop-types';
import MyFavorites from './MyFavorites';
import SearchResults from './SearchResults';

const MeetupList = (props) => {
  const searchTitle = props.query + " Meetups";
  return(
    <Section>
      <Bounds>
        <FavoritesCount>
          My Favorites ({props.favorites.length})
        </FavoritesCount>
        { props.showFavorites ? (<ListTitle title={"My Favorites"} />) : (<ListTitle title={searchTitle} />)}
        { props.showFavorites ? (<MyFavorites {...props} />) : (<SearchResults {...props} />)}
      </Bounds>
    </Section>
  ) 
}

MeetupList.propTypes = {
  showFavorites : PropTypes.bool,
  favorites: PropTypes.array,
  meetups: PropTypes.array,
  query: PropTypes.string,
  error: PropTypes.bool,
  toggleFavorite: PropTypes.func
}

const FavoritesCount = styled.div`
  position: absolute;
  right: 50px;
  margin-bottom: 20px;
`;
FavoritesCount.DisplayName = 'FavoritesCount';


export default MeetupList;