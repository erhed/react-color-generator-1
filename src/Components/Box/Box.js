import React from 'react';
import './Box.css';

const box = (props) => {

  // Color style variable
  let boxColor = {
    backgroundColor: 'blue'
  };

  // Set color from state.colors via props to boxColor-variable. rgb(x,x,x)-form
  boxColor.backgroundColor = "rgb(" +
    props.color.color.r + "," +
    props.color.color.g + "," +
    props.color.color.b + ")";

  // Render box with rgb & hex-values and onClick-functions.
  return (
      <div style={boxColor} className="color-box">
        <div className="text">
          <p className="rgb" onClick={props.rgbClick}> {props.color.color.r}, {props.color.color.g}, {props.color.color.b}</p>
          <p className="h" onClick={props.hexClick}>{props.hex}</p>
        </div>
        <div className="click" onClick={props.click}></div>
      </div>
  );
}

export default box;