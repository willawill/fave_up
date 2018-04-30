import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'meetup-web-components/lib/forms/Button';

export default class FavoriteButton extends React.Component {
  buttonText() {
    return this.props.isFavorited ? 'Remove ' : 'Add to '
  }

	render() {
    return <Button primary hasHoverShadow onClick={this.props.toggleFavorite}>{this.buttonText()} Favorite</Button>
  }
}

FavoriteButton.propTypes = {
  isFavorited: PropTypes.bool
};