import React from 'react';
import PropTypes from 'prop-types';
import Meetup from './Meetup';
import fetchJsonp from 'fetch-jsonp';
import querystring from 'querystring';

// MyFavorites component
class MyFavorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoritesWithDetails: []
    };
  }

  componentDidMount() {
    if (this.props.favorites.length === 0) {
      return;
    }
    this.updateFavorites();
  }

   updateFavorites() {
     const params = querystring.stringify({
      event_id: this.props.favorites.join(','),
      fields: 'rsvp_sample',
      page: '15',
      key: '6752511f3291b2b182ee4d2ef312',
    });
    const apiUrl = `https://api.meetup.com/2/events/?${params}`;

    fetchJsonp(apiUrl)
      .then(response => response.json())
      .then(json =>
        this.setState({
          favoritesWithDetails: json.results
        })        
      )
      .catch(err => {
        console.error(err);
        this.setState({
          favoritesWithDetails: []
        });
      });
   } 

  render() {
    return (
      <div>
        { this.props.favorites.length === 0 ? (
          <p className="text--error text--bold">You haven't favorited any event yet!</p>
          ) : (
            this.state.favoritesWithDetails.map(favorite => {
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
                  isFavorited={this.props.favorites.includes(favorite.id)}
                  toggleFavorite={this.props.toggleFavorite}
                />
              );
            })
          )
        }
      </div>
    );
  }
}

export default MyFavorites;

MyFavorites.propTypes = {
  favorites: PropTypes.array
}