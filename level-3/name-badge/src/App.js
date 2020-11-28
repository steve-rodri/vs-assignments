import React, { Component } from "react";
import { BadgeForm, BadgeList } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: [],
    };
    this.addBadge = this.addBadge.bind(this);
  }

  addBadge(badge) {
    const badges = [...this.state.badges];
    badges.push(badge);
    this.setState({ badges });
  }

  render() {
    return (
      <>
        <BadgeForm addBadge={this.addBadge} />
        <BadgeList badges={this.state.badges} />
      </>
    );
  }
}

export default App;
