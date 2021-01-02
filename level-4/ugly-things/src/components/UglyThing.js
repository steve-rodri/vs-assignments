import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "./Form";
import { UglyThingContextConsumer } from "../context/UglyThingContext";
import "../styles/UglyThing.css";

class UglyThing extends React.Component {
  state = { editing: false };

  startEditing = () => this.setState({ editing: true });

  stopEditing = e => {
    if (e) e.preventDefault();
    this.setState({ editing: false });
  };

  render() {
    const { imgUrl, title, description, index } = this.props;
    return (
      <UglyThingContextConsumer>
        {({ deleteThing }) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={imgUrl}
              alt={title}
              style={{ height: "12rem" }}
            />
            <Card.Body>
              {this.state.editing ? (
                <Form
                  {...this.props}
                  stopEditing={this.stopEditing}
                  showLabels
                />
              ) : (
                <>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Button onClick={this.startEditing} variant="primary">
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteThing(index)}
                    variant="outline-danger"
                  >
                    Delete
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        )}
      </UglyThingContextConsumer>
    );
  }
}

export default UglyThing;
