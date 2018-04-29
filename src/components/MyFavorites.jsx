import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fetchJsonp from 'fetch-jsonp';

// MyFavorites component
class MyFavorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    const favoritesURL = 'favorites/' + this.props.userID;

    fetch(favoritesURL)
      .then(response => response.json())
      .then(json => this.setState({ favorites: json.favorites }))
  }

  render() {
    return (
      <FavoritesCount>
        My Favorites ({this.state.favorites.length})
      </FavoritesCount>)
  }
}

const FavoritesCount = styled.div`
  text-align: right;
  margin-right: 100px;
`;

export default MyFavorites;