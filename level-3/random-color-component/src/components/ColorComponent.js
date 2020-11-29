import React, { Component } from "react";
import axios from "axios";

class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  async componentDidMount() {
    const {
      data: { colors },
    } = await axios.get(
      `http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`
    );
    this.setState({ color: `#${colors[0].hex}` });
  }

  render() {
    const { color } = this.state;
    return (
      <div className="ColorComponent" style={{ backgroundColor: color }}></div>
    );
  }
}

export default ColorComponent;
