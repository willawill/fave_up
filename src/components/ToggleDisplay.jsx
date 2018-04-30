import React from 'react';
import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Section from 'meetup-web-components/lib/layout/Section';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ToggleDisplay = (props) => {
  return (
    <Section>
      <Bounds>
        <ToggleFavoriteView onClick={props.toggleOnlyFavorites}>
          Click here to see { props.showFavorites ? 'search results' : 'favorites only'}
        </ToggleFavoriteView>
      </Bounds>
    </Section>
  )
}

const ToggleFavoriteView = styled.a`
  color: #00a2c7;
  cursor: pointer;
`;
ToggleFavoriteView.DisplayName = 'ToggleFavoriteView';

ToggleDisplay.propTypes = {
  toggleOnlyFavorites: PropTypes.func,
  showFavorites : PropTypes.bool
}
export default ToggleDisplay;