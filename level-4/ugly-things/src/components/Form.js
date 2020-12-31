import React, { Component } from "react";
import { UglyThingContextConsumer } from "../context/UglyThingContext";
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

  componentDidMount() {
    const { imgUrl = "", title = "", description = "" } = this.props;
    this.setState({ imgUrl, title, description });
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = (e, { addThing, updateThing }) => {
    e.preventDefault();
    if (this.props.index !== undefined) {
      updateThing(this.state, this.props.index);
      if (this.props.stopEditing) this.props.stopEditing();
    } else {
      addThing(this.state);
    }
    this.resetState();
  };

  resetState = () => {
    this.setState({ imgUrl: "", title: "", description: "" });
  };

  render() {
    return (
      <UglyThingContextConsumer>
        {context => (
          <form onSubmit={e => this.onSubmit(e, context)}>
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
            {this.props.stopEditing ? (
              <button onClick={this.props.stopEditing}>Cancel</button>
            ) : null}
          </form>
        )}
      </UglyThingContextConsumer>
    );
  }
}

export default Form;
