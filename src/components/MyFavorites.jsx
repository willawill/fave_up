import React from 'react';
import PropTypes from 'prop-types';
import Meetup from './Meetup';

// MyFavorites component
class MyFavorites extends React.Component {
  render() {
    const {favorites} = this.props;

    return (
      <div>
        <h1 className="text--display1 margin--bottom">
          My Favorites
        </h1>
        <div>
          {favorites.length == 0 ? (
            <p className="text--error text--bold">
              You haven't favorited any event yet!
            </p>
          ) : (
            favorites.map(favorite => {
              return (
                <Meetup
                  id={favorite.id}
                  name={favorite.name}
                  url={favorite.event_url}
                  group={favorite.group.name}
                  key={favorite.created}
                  time={favorite.time}
                  rsvpCount={favorite.yes_rsvp_count}
                  rsvpers={favorite.rsvp_sample}
                  isFavorited={true}
                  toggleFavorite={this.props.toggleFavorite}
                />
              );
            })
          )
          }
        </div>
      </div>
    );

  }
}

export default MyFavorites;

MyFavorites.propTypes = {
  favorites: PropTypes.array
}