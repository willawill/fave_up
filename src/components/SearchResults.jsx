import React from 'react';
import Meetups from './Meetups';

const SearchResults = (props) => {
  return (
    <div>
      { props.error ? (
        <p className="text--error text--bold">
        Looks like something went wrong…
        </p>) : ('')}
      { props.loading ? (
      <div className="loader">Loading...</div>
      ) : (
      <Meetups
        query={props.query}
        error={props.error}
        meetups={props.meetups}
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        />
    )}
    </div>
  )
}

export default SearchResults;