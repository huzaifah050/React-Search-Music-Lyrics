import React from 'react';
import loading from './spinner.gif';

const Loading = () => {
  return (
    <div>
      <img
        src={loading}
        alt="Loading"
        style={{ width: '400px', margin: '40px auto', display: 'block' }}
      />
    </div>
  );
};

export default Loading;
