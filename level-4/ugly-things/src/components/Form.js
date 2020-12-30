import React, { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
      title: "",
      description: "",
    };
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="url"
          name="imgUrl"
          placeholder="img URL"
          value={this.state.imgUrl}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
