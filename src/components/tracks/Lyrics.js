import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  componentDidMount() {
    axios
      .get(
        `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        // console.log(res.data.message.body.lyrics.lyrics_body);
        this.setState({
          lyrics: res.data.message.body.lyrics,
        });
        return axios
          .get(
            `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
          )
          .then((res) => {
            console.log(res.data.message.body.track.track_name);
            this.setState({
              track: res.data.message.body.track,
            });
          })
          .catch((err) => console.log(err));
      });
  }
  render() {
    const { track, lyrics } = this.state;
    console.log(track.primary_genres);

    if (Object.keys(track).length || Object.keys(lyrics).length) {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <div className="card-header">
              {track.track_name}{' '}
              <span className="text-secondary">{track.artist_name}</span>
            </div>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Genre</strong>:{' '}
              {/* {track.primary_genres.music_genre_list[0]
                ? track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name
                : 'no'} */}
            </li>
            <li className="list-group-item">
              <strong>Explicit</strong>: {track.explicit ? 'Yes' : 'No'}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>:{' '}
              <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
            </li>
          </ul>
        </React.Fragment>
      );
    }

    return <div></div>;
  }
}

export default Lyrics;
