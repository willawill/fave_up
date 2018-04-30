import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import querystring from 'querystring';
import './App.css';
import SearchBar from './components/SearchBar';
import ToggleDisplay from './components/ToggleDisplay';
import Header from './components/Header';
import MeetupList from './components/MeetupList';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'javascript',
      loading: false,
      error: false,
      favorites: [],
      meetups: [],
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

    fetchJsonp(apiUrl)
      .then(response => response.json())
      .then(json =>
        this.setState({
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
        meetups: [],
        favorites: [],
        loading: false,
        error: true
      });
    });
  }

  handleSearch = (query) => {
    this.fetchEvents(query);
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
        <SearchBar handleSearch={this.handleSearch} />
        <ToggleDisplay showFavorites={this.state.showFavorites} toggleOnlyFavorites={this.toggleOnlyFavorites} />
        <MeetupList
          favorites={this.state.favorites}
          toggleFavorite={this.toggleFavorite}
          meetups={this.state.meetups}
          error={this.state.error}
          loading={this.state.loading}
          query={this.state.query}
          showFavorites={this.state.showFavorites}
        />
    </div>
    );
  }
}

export default App;
