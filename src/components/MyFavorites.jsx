import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fetchJsonp from 'fetch-jsonp';

// MyFavorites component
class MyFavorites extends Component {
  render() {
    return (
      <FavoritesCount>
        My Favorites ({this.props.favorites.length})
      </FavoritesCount>);
  }
}

const FavoritesCount = styled.div`
  text-align: right;
  margin-right: 100px;
`;

FavoritesCount.DisplayName = 'FavoritesCount';

export default MyFavorites;

MyFavorites.propTypes = {
  favorites: PropTypes.array
}