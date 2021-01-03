import React, { Component } from "react";
import { UglyThingContextConsumer } from "../context/UglyThingContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    const { _id, imgUrl = "", title = "", description = "" } = this.props;
    this.setState({ _id, imgUrl, title, description });
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e, context) => {
    e.preventDefault();
    const { addThing, updateThing } = context;
    if (this.state._id !== undefined) {
      updateThing(this.state);
      if (this.props.stopEditing) this.props.stopEditing();
    } else {
      const { _id, ...data } = this.state;
      addThing(data);
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
    const { className } = this.props;
    const isCardForm = className !== "main";
    return (
      <UglyThingContextConsumer>
        {context => (
          <Form onSubmit={e => this.onSubmit(e, context)} className={className}>
            <Title {...this.state} {...this} showLabel={isCardForm} />
            <ImageUrl {...this.state} {...this} showLabel={isCardForm} />
            <Description {...this.state} {...this} showLabel={isCardForm} />
            <SubmitButton />
            {isCardForm && <CancelButton onClick={this.onCancel} />}
          </Form>
        )}
      </UglyThingContextConsumer>
    );
  }
}

const label = (text, display) => {
  if (display) return <Form.Label>{text}</Form.Label>;
};

const Title = ({ title, onChange, showLabel }) => (
  <Form.Group>
    {label("Title", showLabel)}
    <Form.Control
      block
      name="title"
      onChange={onChange}
      placeholder="Title"
      size="lg"
      type="text"
      value={title}
    />
  </Form.Group>
);

const ImageUrl = ({ imgUrl, onChange, showLabel }) => (
  <Form.Group>
    {label("Image Url", showLabel)}
    <Form.Control
      block
      name="imgUrl"
      onChange={onChange}
      placeholder="Image Url"
      size="lg"
      type="url"
      value={imgUrl}
    />
  </Form.Group>
);

const Description = ({ description, onChange, showLabel }) => (
  <Form.Group>
    {label("Description", showLabel)}
    <Form.Control
      block
      name="description"
      onChange={onChange}
      placeholder="Description"
      size="lg"
      type="text"
      value={description}
    />
  </Form.Group>
);

const SubmitButton = () => (
  <Button variant="primary" size="lg" type="submit">
    Submit
  </Button>
);

const CancelButton = ({ onClick }) => (
  <Button
    onClick={onClick}
    size="lg"
    style={{ marginLeft: ".5rem" }}
    variant="outline-secondary"
  >
    Cancel
  </Button>
);

export default UglyThingForm;
