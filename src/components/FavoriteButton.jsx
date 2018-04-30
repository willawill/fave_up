import React from 'react';
import PropTypes from 'prop-types';
import Button from 'meetup-web-components/lib/forms/Button';
import styled from 'styled-components';

const FavoriteButton = props => {
  const buttonText = props.isFavorited ? 'Remove ' : 'Add to ';
  return <ActionButton hasHoverShadow isFavorited={props.isFavorited} onClick={props.toggleFavorite} >
    { buttonText } Favorite
  </ActionButton>
};

FavoriteButton.propTypes = {
  isFavorited: PropTypes.bool,
  toggleFavorite: PropTypes.func
};

const ActionButton = styled(Button)`
  background-color: ${props => props.isFavorited ? 'grey' : 'red'};
  display: inline-block;
  position: absolute;
  right: 50px;
  margin-top: 40px;
  min-width: 165px;
`;

export default FavoriteButton