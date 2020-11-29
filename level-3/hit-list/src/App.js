import React, { Component } from "react";
import Targets from "./components/Targets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      targets: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      "https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json"
    )
      .then((resp) => resp.json())
      .then((targets) => this.setState({ targets, loading: false }));
  }

  render() {
    return (
      <>
        <header>
          <h2>Don Corleone's Hit List</h2>
        </header>
        <main>
          {this.state.loading ? (
            "loading..."
          ) : (
            <Targets data={this.state.targets} />
          )}
        </main>
      </>
    );
  }
}

export default App;
