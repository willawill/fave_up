import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import querystring from 'querystring';
import './App.css';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Meetups from './components/Meetups';
import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Section from 'meetup-web-components/lib/layout/Section';
import Button from 'meetup-web-components/lib/forms/Button';
import MyFavorites from './components/MyFavorites';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: [],
      query: 'javascript',
      loading: false,
      error: false,
      favorites: [],
      showFavorites: false
    };
  }

  fetchEvents = (search_term) => {
    this.setState({
      meetups: [],
      query: search_term,
      loading: true,
      error: false,
    });

    const qs = querystring.stringify({
      zip: '10012',
      text: search_term,
      fields: 'rsvp_sample',
      page: '15',
      key: '6752511f3291b2b182ee4d2ef312',
      time: '1w,',
    });

    const apiUrl = `https://api.meetup.com/2/open_events/?${qs}`;
    const self = this;

    fetchJsonp(apiUrl)
      .then(response => response.json())
      .then(json =>
        self.setState({
          meetups: json.results,
          query: search_term,
          loading: false,
          error: false,
        })
      );
  }

// TODO fix the userId when there is an user system, now the userID is hardcoded to be 1.
  fetchFavorites = () => {
    const favoritesURL = 'favorites?userId=1';
    this.setState({
      loading: true,
      error: false,
    });

    fetch(favoritesURL)
      .then(res => res.json())
      .then(results =>
        this.setState({
          favorites: results['favorites'],
          loading: false,
          error: false
      })
    )
  }

  componentDidMount() {
    Promise.all([
      this.fetchEvents('javascript'),
      this.fetchFavorites()
    ]).catch(err => {
      console.error(err);
      this.setState({
        favorites: [],
        loading: false,
        error: true
      });
    });
  }

  handleSubmit = async (query) => {
    await this.fetchEvents(query);
  }

  toggleOnlyFavorites = () => {
    const newMode = !this.state.showFavorites;
    this.setState({showFavorites: newMode});
  }

  toggleFavorite = (eventId, isFavorited) => {
    if (isFavorited) {
      this.removeFromFavorite(eventId);
    } else {
      this.addToFavorite(eventId);
    }
  }

  addToFavorite(eventId) {
    const options = {
      method: 'post',
      body: JSON.stringify({
        eventId: eventId,
        userId: '1'
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch('/favorites', options)
      .then(res => res.json())
      .then(result => {
        this.setState({ favorites: _.union(this.state.favorites, [eventId]) })
      })
    .catch(err => {
      console.log(err);
    })
  }

  removeFromFavorite(eventId) {
    const options = {
      method: 'delete',
      body: JSON.stringify({ userId: 1 }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    
    fetch(`/favorites/${eventId}`, options)
      .then(res => res.json())
      .then(result => {
        this.setState({ favorites: _.without(this.state.favorites, eventId) })
      })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar handleSubmit={this.handleSubmit} />
        <Section>
          <ToggleFavoriteView onClick={this.toggleOnlyFavorites}>
            Click here to see { this.state.showFavorites ? 'search results' : 'favorites only'}
          </ToggleFavoriteView>
        </Section>
        { this.state.showFavorites ? (
          <Section>
            <Bounds>
              <MyFavorites
                favorites={this.state.favorites}
                toggleFavorite={this.toggleFavorite} />
            </Bounds>
          </Section>
        ) : (
        <Section>
          <Bounds>
            <FavoritesCount>
              My Favorites ({this.state.favorites.length})
            </FavoritesCount>

            <h1 className="text--display1 margin--bottom">
              {this.state.query} Meetups
            </h1>
            {this.state.error ? (
              <p className="text--error text--bold">
                Looks like something went wrong…
              </p>
            ) : (
              ''
            )}
            {this.state.loading ? (
              <div className="loader">Loading...</div>
            ) : (
              <Meetups
                query={this.state.query}
                error={this.state.error}
                meetups={this.state.meetups}
                favorites={this.state.favorites}
                toggleFavorite={this.toggleFavorite}
              />
            )}
          </Bounds>
        </Section>
      )}
    </div>
    );
  }
}

const FavoritesCount = styled.div`
  position: absolute;
  right: 50px;
  margin-bottom: 20px;
`;
FavoritesCount.DisplayName = 'FavoritesCount';

const ToggleFavoriteView = styled.a`
  color: #00a2c7;
  padding-left: 100px;
  cursor: pointer;
`;
ToggleFavoriteView.DisplayName = 'ToggleFavoriteView';

export default App;
