// export const search = (state) => {
//   return {
//     type: 'SEARCH',
//     data: state
//   }
// }

import {
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
} from './trackTypes';
import axios from 'axios';

export const fetchTrackRequest = () => {
  return {
    type: FETCH_TRACKS_REQUEST,
  };
};

export const fetchTrackSuccess = (tracks) => {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: tracks,
  };
};

export const fetchTrackFailure = (err) => {
  return {
    type: FETCH_TRACKS_FAILURE,
    payload: err,
  };
};

export const fetchTracks = () => {
  return (dispatch) => {
    dispatch(fetchTrackRequest);
    axios
      .get(
        `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        const tracks = res.data.message.body.track_list;
        dispatch(fetchTrackSuccess(tracks));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchTrackFailure(errMsg));
      });
  };
};
