import React, { Component } from "react";
import SquaresGroup from "./components/SquaresGroup";
import Buttons from "./components/Buttons";
import Sounds from "./components/Sounds";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: new Array(4).fill("white"),
    };
    this.toggleBW = this.toggleBW.bind(this);
    this.setTopPurple = this.setTopPurple.bind(this);
    this.changeToBlue = this.changeToBlue.bind(this);
    this.random = this.random.bind(this);
    this.pauseAllSounds = this.pauseAllSounds.bind(this);

    this.coffinDanceRef = React.createRef();
    this.fightTheSystemRef = React.createRef();
    this.flexRef = React.createRef();
    this.ghoulRef = React.createRef();
    this.myContentionRef = React.createRef();
    this.rumbleRef = React.createRef();
  }

  toggleBW() {
    const whiteArr = new Array(4).fill("white");
    const blackArr = new Array(4).fill("black");

    if (this.state.colors[0] === "white") {
      this.setState({ colors: blackArr });
    } else {
      this.setState({ colors: whiteArr });
    }
    this.pauseAllSounds();
    this.coffinDanceRef.current.play();
  }

  setTopPurple() {
    this.setState((prevState) => {
      let colors = [...prevState.colors];
      colors[0] = "purple";
      colors[1] = "purple";
      return { colors };
    });
    this.pauseAllSounds();
    this.rumbleRef.current.play();
  }

  changeToBlue({ target: { name } }) {
    this.setState((prevState) => {
      let colors = [...prevState.colors];
      if (name === "bottom-left") {
        colors[2] = "blue";
      } else if (name === "bottom-right") {
        colors[3] = "blue";
      }
      return { colors };
    });
    this.pauseAllSounds();
    if (name === "bottom-left") {
      this.flexRef.current.play();
    } else if (name === "bottom-right") {
      this.fightTheSystemRef.current.play();
    }
  }

  random({ target: { name } }) {
    const randomColor = () => {
      let r = Math.round(Math.random() * 255);
      let g = Math.round(Math.random() * 255);
      let b = Math.round(Math.random() * 255);
      return `rgb(${r}, ${g}, ${b})`;
    };
    this.setState((prevState) => {
      let colors = [...prevState.colors];
      switch (name) {
        case "top-left":
          colors[0] = randomColor();
          break;
        case "top-right":
          colors[1] = randomColor();
          break;
        case "bottom-left":
          colors[2] = randomColor();
          break;
        case "bottom-right":
          colors[3] = randomColor();
          break;
        default:
      }
      return { colors };
    });
    this.pauseAllSounds();
    this.playRandomSound();
  }

  pauseAllSounds() {
    this.coffinDanceRef.current.pause();
    this.fightTheSystemRef.current.pause();
    this.flexRef.current.pause();
    this.ghoulRef.current.pause();
    this.myContentionRef.current.pause();
    this.rumbleRef.current.pause();
  }

  playRandomSound() {
    const randomNum = Math.ceil(Math.random() * 6);
    switch (randomNum) {
      case 1:
        this.coffinDanceRef.current.play();
        break;
      case 2:
        this.fightTheSystemRef.current.play();
        break;
      case 3:
        this.flexRef.current.play();
        break;
      case 4:
        this.ghoulRef.current.play();
        break;
      case 5:
        this.myContentionRef.current.play();
        break;
      case 6:
        this.rumbleRef.current.play();
        break;
      default:
        break;
    }
  }

  render() {
    const buttonActions = {
      toggleBW: this.toggleBW,
      setTopPurple: this.setTopPurple,
      changeToBlue: this.changeToBlue,
      random: this.random,
    };
    const refs = {
      coffinDanceRef: this.coffinDanceRef,
      fightTheSystemRef: this.fightTheSystemRef,
      flexRef: this.flexRef,
      ghoulRef: this.ghoulRef,
      myContentionRef: this.myContentionRef,
      rumbleRef: this.rumbleRef,
    };
    return (
      <>
        <SquaresGroup colors={this.state.colors} />
        <Buttons {...buttonActions} />
        <Sounds {...refs} />
        <button onClick={this.pauseAllSounds}>Stop</button>
      </>
    );
  }
}

export default App;
