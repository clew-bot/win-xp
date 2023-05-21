import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressbar() {
  return (
    <div style={{ border: 'solid 5px red'}}>
        <ProgressBar now={60} />
    </div>
  )
}

export default Progressbar;