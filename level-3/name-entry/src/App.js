import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      names: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value: name } }) {
    this.setState({ name });
  }

  handleSubmit(e) {
    e.preventDefault();
    const names = [...this.state.names];
    names.push(this.state.name);
    this.setState({
      name: "",
      names,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input">
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </div>
        <div className="heading">
          <h1>{this.state.name}</h1>
        </div>
        <ol>
          {this.state.names.map((name) => (
            <li>{name}</li>
          ))}
        </ol>
      </form>
    );
  }
}

export default App;
