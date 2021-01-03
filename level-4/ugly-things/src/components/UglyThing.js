import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "./Form";
import { UglyThingContextConsumer } from "../context/UglyThingContext";

class UglyThing extends React.Component {
  state = { editing: false };

  startEditing = () => this.setState({ editing: true });

  stopEditing = e => {
    if (e) e.preventDefault();
    this.setState({ editing: false });
  };

  render() {
    const { state, props, ...rest } = this;
    return (
      <UglyThingContextConsumer>
        {context => (
          <Card style={{ width: "18rem" }}>
            <CardImage {...props} />
            <CardBody {...state} {...props} {...context} {...rest} />
          </Card>
        )}
      </UglyThingContextConsumer>
    );
  }
}

const CardImage = ({ imgUrl, title }) => (
  <Card.Img
    variant="top"
    src={imgUrl}
    alt={title}
    style={{ height: "12rem" }}
  />
);

const CardBody = props => {
  const { title, description, editing, startEditing, deleteThing } = props;
  return (
    <Card.Body>
      {editing ? (
        <Form {...props} />
      ) : (
        <>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <EditButton onClick={startEditing} />
          <DeleteButton onClick={() => deleteThing(props)} />
        </>
      )}
    </Card.Body>
  );
};

const EditButton = ({ onClick }) => (
  <Button onClick={onClick} variant="outline-primary">
    Edit
  </Button>
);

const DeleteButton = ({ onClick }) => (
  <Button onClick={onClick} variant="outline-danger">
    Delete
  </Button>
);

export default UglyThing;
