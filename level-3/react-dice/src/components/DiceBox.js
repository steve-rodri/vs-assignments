import React, { Component } from "react";
import Die from "./Die";
import "./DiceBox.css";

class DiceBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die: [
        { value: "", selected: false },
        { value: "", selected: false },
        { value: "", selected: false },
        { value: "", selected: false },
        { value: "", selected: false },
      ],
      rollCount: 0,
    };
    this.roll = this.roll.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  roll() {
    this.generateValues();
    if (this.state.rollCount % 3 === 0) {
      this.reset();
    }
    this.setState({ rollCount: this.state.rollCount + 1 });
  }

  reset() {
    const die = this.state.die.map((die) => {
      die.selected = false;
      die.value = 0;
      return die;
    });
    this.setState({ die });
  }

  generateValues() {
    const randomNumber = () => Math.round(Math.random() * 6);
    const die = this.state.die.map((die) => {
      if (!die.selected) {
        die.value = randomNumber();
      }
      return die;
    });
    this.setState({ die });
  }

  handleSelect(num) {
    let die = [...this.state.die];
    die[num].selected = !die[num].selected;
    this.setState({ die });
  }

  render() {
    return (
      <>
        <div className="DiceBox">
          {this.state.die.map((die, i) => (
            <Die {...die} onSelect={() => this.handleSelect(i)} />
          ))}
        </div>
        <button id="roll-button" onClick={this.roll}>
          Roll
        </button>
      </>
    );
  }
}

export default DiceBox;
