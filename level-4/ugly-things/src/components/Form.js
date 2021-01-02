import React, { Component } from "react";
import { UglyThingContextConsumer } from "../context/UglyThingContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Form.css";

class UglyThingForm extends Component {
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

  onCancel = e => {
    e.preventDefault();
    if (this.props.stopEditing) this.props.stopEditing();
    this.resetState();
  };

  resetState = () => {
    this.setState({ imgUrl: "", title: "", description: "" });
  };

  render() {
    return (
      <UglyThingContextConsumer>
        {context => (
          <Form
            onSubmit={e => this.onSubmit(e, context)}
            className={this.props.className}
          >
            <Form.Group>
              {this.props.showLabels ? <Form.Label>Title</Form.Label> : null}
              <Form.Control
                size="lg"
                block
                type="text"
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group>
              {this.props.showLabels ? (
                <Form.Label>Image Url</Form.Label>
              ) : null}
              <Form.Control
                size="lg"
                block
                type="url"
                name="imgUrl"
                placeholder="Image Url"
                value={this.state.imgUrl}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group>
              {this.props.showLabels ? (
                <Form.Label>Description</Form.Label>
              ) : null}
              <Form.Control
                size="lg"
                block
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </Form.Group>
            <Button variant="primary" size="lg" type="submit">
              Submit
            </Button>
            {this.props.className !== "main" && (
              <Button
                variant="outline-secondary"
                size="lg"
                onClick={this.onCancel}
                style={{ marginLeft: ".5rem" }}
              >
                Cancel
              </Button>
            )}
          </Form>
        )}
      </UglyThingContextConsumer>
    );
  }
}

export default UglyThingForm;
