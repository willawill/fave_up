import React from 'react';

import Section from 'meetup-web-components/lib/layout/Section';
import Button from 'meetup-web-components/lib/forms/Button';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  let queryString = { value: '' };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(queryString.value);
  }

  return (
    <Section>
      <form onSubmit={handleSubmit}>
      <div className="row bounds bounds--wide">
        <div className="row-item chunk">
          <input
            id="query"
            type="text"
            name="query"
            placeholder="Find some Meetups..."
            ref={qs => queryString = qs}
          />
        </div>
        <div className="row-item chunk row-item--shrink">
          <Button className="button--primary">Search</Button>
        </div>
      </div>
      </form>
    </Section>
  )
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func
}
export default SearchBar;