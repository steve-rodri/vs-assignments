import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "./Form";
import BountyContext from "../context/BountiesContext";

const Bounty = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <CardImage {...props} />
      <CardBody {...props} />
    </Card>
  );
};

const CardImage = ({ photoUrl, title }) => (
  <Card.Img
    variant="top"
    src={photoUrl}
    alt={title}
    style={{ height: "12rem" }}
  />
);

const CardBody = props => {
  const [editing, setEditing] = useState(false);
  const { deleteBounty } = useContext(BountyContext);
  const stopEditing = e => {
    if (e) e.preventDefault();
    setEditing(false);
  };
  props = { ...props, stopEditing };
  const { firstName, lastName, type, bountyAmount, living } = props;
  return (
    <Card.Body>
      {editing ? (
        <Form {...props} />
      ) : (
        <>
          <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{type}</Card.Subtitle>
          <Card.Subtitle>{living ? "Alive" : "Dead"}</Card.Subtitle>
          <Card.Text>{`Amount: $${bountyAmount}`}</Card.Text>
          <EditButton onClick={() => setEditing(true)} />
          <DeleteButton onClick={() => deleteBounty(props)} />
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

export default Bounty;
