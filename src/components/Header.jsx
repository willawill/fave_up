import React from 'react';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Section from 'meetup-web-components/lib/layout/Section';
import meetup_logo from '../meetup_logo.svg';

const  Header = (props) => {
  return (
    <Section>
      <Bounds className="align--center">
      <img src={meetup_logo} className="logo" alt="logo" />
      </Bounds>
    </Section>
  )
}

export default Header;