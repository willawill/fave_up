import React from "react";
import Meetup from './Meetup';
import PropTypes from 'prop-types';

const Meetups = props => {
  return (
    <ul className="list">
      {!props.meetups.length && !props.error ? (
        <p className="list-item text--error text--bold">
          We couldn't find anything matching {props.query}!
        </p>
      ) : ("")
      }
      {props.meetups.map(meetup => {
        return (
          <Meetup
            id={meetup.id}
            name={meetup.name}
            url={meetup.event_url}
            group={meetup.group.name}
            key={meetup.created}
            time={meetup.time}
            rsvpCount={meetup.yes_rsvp_count}
            rsvpers={meetup.rsvp_sample}
            isFavorited={props.favorites.includes(meetup.id)}
            toggleFavorite={props.toggleFavorite}
          />
        );
      })}
    </ul>
  );
};

Meetups.propTypes = {
  error: PropTypes.bool,
  favorites: PropTypes.array,
  meetups: PropTypes.array,
  query: PropTypes.string,
  toggleFavorite: PropTypes.func
}
export default Meetups;