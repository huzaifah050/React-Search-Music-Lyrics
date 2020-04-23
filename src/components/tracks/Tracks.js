import React, { useEffect } from 'react';
import { fetchTracks } from '../../store/actions';
import { connect } from 'react-redux';
import Track from './Track';
import Loading from '../layouts/Loading';

const Tracks = ({ state, fetchTracks }) => {
  useEffect(() => {
    fetchTracks();
  }, []);

  // console.log(state.trackList);
  if (state.trackList.length) {
    return (
      <React.Fragment>
        <h3 className="text-center mb-4">{state.heading}</h3>
        <div className="row">
          {state.trackList.map((item) => {
            return (
              <Track
                track={item}
                id={item.track.track_id}
                key={item.track.track_id}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  } else {
    return <Loading />;
  }
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = {
  fetchTracks: fetchTracks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
