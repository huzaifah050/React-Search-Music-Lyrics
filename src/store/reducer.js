import {
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
} from './trackTypes';

const initState = {
  trackList: [],
  loading: false,
  error: '',
  heading: 'Top 10 Tracks',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TRACKS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        trackList: action.payload,
        error: '',
      };
    case FETCH_TRACKS_FAILURE:
      return {
        ...state,
        loading: true,
        trackList: [],
        error: action.payload,
      };

    case 'SEARCH_TRACKS':
      return {
        ...state,
        loading: false,
        trackList: action.payload,
        heading: 'Searched Tracks..',
      };
    default:
      return state;
  }
};

export default reducer;
