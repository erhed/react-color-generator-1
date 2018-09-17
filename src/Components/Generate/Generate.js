import React from 'react';
import './Generate.css';

// Simple button. Triggers changeAll()-function in App.js

const generate = (props) => {

  return (
    <div className="container">
      <div
        className="button generate"
        onClick={props.click}>
        GENERATE
      </div>
    </div>
  );
}

export default generate;