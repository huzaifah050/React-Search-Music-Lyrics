import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTrack } from '../../store/actions';
import axios from 'axios';

class Search extends Component {
  state = {
    trackTitle: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.trackTitle) {
      axios
        .get(
          `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
        )
        .then((res) => {
          console.log(res.data.message.body.track_list);
          this.props.searchTrack(res.data.message.body.track_list);
        })
        .catch((err) => console.log(err.message));
    } else {
      return;
    }
  };
  render() {
    return (
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-music"></i> Search For a Song
        </h1>
        <p className="lead text-center">Get the Lyrics for any Song</p>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="trackTitle"
            id="trackList"
            onChange={this.handleChange}
            className="form-control form-control-lg"
            placeholder="Song title.."
          />
          <button
            className="btn btn-primary btn-lg btn-block mt-3"
            type="submit"
          >
            Get Lyrics
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchTrack: searchTrack,
};

export default connect(null, mapDispatchToProps)(Search);
