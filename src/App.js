import React, { Component } from 'react';
import './App.css';
import Box from './Components/Box/Box';
import Generate from './Components/Generate/Generate';

class App extends Component {

  // State setting initial colors, number of items also dictates number of boxes. Six in this case.
  state = {
    colors: [
      { id: 101, color: { r: 255, g: 0, b: 0 } },
      { id: 102, color: { r: 0, g: 255, b: 0 } },
      { id: 103, color: { r: 0, g: 0, b: 255 } },
      { id: 104, color: { r: 255, g: 255, b: 0 } },
      { id: 105, color: { r: 255, g: 0, b: 255 } },
      { id: 106, color: { r: 0, g: 255, b: 255 } }
    ]
  }

  // Function that sets random color in specified box (id).
  changeColor = (id) => {
    const colors = [...this.state.colors];
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const rgb = { r: r, g: g, b: b };
    colors[id].color = rgb;
    this.setState({ colors: colors });
  }

  // Changes all colors by looping through state.colors, sending them to changeColor()-function.
  changeAll = () => {
    for (let i = 0; i < this.state.colors.length; i++) {
      this.changeColor(i);
    }
  }

  // Convert single RGB value to hex-code. Thank you internet.
  rgbToHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  // Takes R, G and B-values and converts them to hex-code with the use of rgbToHex()-function.
  joinHex = (r, g, b) => {
    let hex = this.rgbToHex(r) + "" + this.rgbToHex(g) + "" + this.rgbToHex(b);
    return hex;
  }

  // Copy specified text to clipboard. Thank you internet.
  copyToClipboard = (text) => {
    let dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

  // Copy RGB to clipboard with clipToClipboard()-function.
  copyRgb = (id) => {
    let string = this.state.colors[id].color.r + "," + this.state.colors[id].color.g + "," + this.state.colors[id].color.b;
    this.copyToClipboard(string);
  }

  // Copy HEX to clipboard with clipToClipboard()-function.
  copyHex = (id) => {
    let string = this.joinHex(this.state.colors[id].color.r, this.state.colors[id].color.g, this.state.colors[id].color.b).toUpperCase();
    this.copyToClipboard(string);
  }

  render() {

    // Loop through state.colors and add color-boxes. Six <Box>-components will render in this case.
    let colorBoxes = (
      <div>
        {this.state.colors.map((color, id) => {
          return <Box
            click={() => this.changeColor(id)}
            rgbClick={() => this.copyRgb(id)}
            hexClick={() => this.copyHex(id)}
            color={color}
            hex={this.joinHex(this.state.colors[id].color.r, this.state.colors[id].color.g, this.state.colors[id].color.b).toUpperCase()}
            key={color.id} />
        })}
      </div>
    );

    // Add boxes and GENERATE-button.
    return (
      <div className="App">
        {colorBoxes}
        <Generate 
          click={() => this.changeAll()}/>
      </div>
    );
  }
}

export default App;

