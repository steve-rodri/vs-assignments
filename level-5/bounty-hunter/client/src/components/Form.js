import React, { useState, useEffect, useContext } from "react";
import BountiesContext from "../context/BountiesContext";
import Button from "react-bootstrap/Button";
import BSForm from "react-bootstrap/Form";

const Form = props => {
  const { addBounty, updateBounty } = useContext(BountiesContext);
  const [state, setState] = useState({});

  useEffect(() => {
    const {
      _id,
      firstName,
      lastName = "",
      living = false,
      bountyAmount = 0,
      type = "Jedi",
      photoUrl = "",
    } = props;
    setState({
      _id,
      firstName,
      lastName,
      living,
      bountyAmount,
      type,
      photoUrl,
    });
  }, [props]);

  const onChange = e => {
    const { name, value, checked } = e.target;
    if (name === "bountyAmount") {
      setState(prev => ({ ...prev, [name]: value * 200 }));
      return;
    }
    if (name === "living") {
      setState(prev => ({ ...prev, [name]: checked }));
      return;
    }
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    if (state._id !== undefined) {
      updateBounty(state);
      if (props.stopEditing) props.stopEditing();
    } else {
      const { _id, ...data } = state;
      addBounty(data);
    }
    resetState();
  };

  const onCancel = e => {
    e.preventDefault();
    if (props.stopEditing) props.stopEditing();
    resetState();
  };

  const resetState = () => {
    setState({
      firstName: "",
      lastName: "",
      living: false,
      bountyAmount: 0,
      type: "Jedi",
      photoUrl: "",
    });
  };

  props = {
    ...props,
    ...state,
    onChange,
    onSubmit,
    onCancel,
    resetState,
    showLabel: props.className !== "main",
  };

  return (
    <BSForm onSubmit={onSubmit} className={props.className}>
      <FirstName {...props} />
      <LastName {...props} />
      <Living {...props} />
      <BountyAmount {...props} />
      <Type {...props} />
      <Photo {...props} />
      <SubmitButton {...props} />
      {props.showLabel && <CancelButton onClick={onCancel} />}
    </BSForm>
  );
};

const label = (text, display) => {
  if (display) return <BSForm.Label>{text}</BSForm.Label>;
};

const FirstName = ({ firstName, onChange, showLabel }) => (
  <BSForm.Group>
    {label("First Name", showLabel)}
    <BSForm.Control
      name="firstName"
      onChange={onChange}
      placeholder="First Name"
      size="lg"
      type="text"
      value={firstName || ""}
    />
  </BSForm.Group>
);

const LastName = ({ lastName, onChange, showLabel }) => (
  <BSForm.Group>
    {label("Last Name", showLabel)}
    <BSForm.Control
      name="lastName"
      onChange={onChange}
      placeholder="Last Name"
      size="lg"
      type="text"
      value={lastName || ""}
    />
  </BSForm.Group>
);

const Living = ({ living, onChange }) => (
  <BSForm.Group controlId="formBasicCheckbox">
    <BSForm.Check
      name="living"
      type="checkbox"
      label="Bounty is alive"
      onChange={onChange}
      checked={living || false}
    />
  </BSForm.Group>
);

const BountyAmount = ({ bountyAmount, onChange }) => (
  <BSForm.Group>
    <BSForm.Label>{`Bounty Amount: $${bountyAmount}`}</BSForm.Label>
    <BSForm.Control
      type="range"
      name="bountyAmount"
      onChange={onChange}
      value={bountyAmount / 200 || 0}
    />
  </BSForm.Group>
);

const Type = ({ type, onChange, showLabel }) => (
  <BSForm.Group controlId="formBasicRange">
    {label("Type", showLabel)}
    <BSForm.Control
      as="select"
      name="type"
      onChange={onChange}
      size="lg"
      value={type || "Jedi"}
    >
      <option>Jedi</option>
      <option>Sith</option>
    </BSForm.Control>
  </BSForm.Group>
);

const Photo = ({ photoUrl, onChange, showLabel }) => (
  <BSForm.Group>
    {label("Photo", showLabel)}
    <BSForm.Control
      name="photoUrl"
      onChange={onChange}
      placeholder="url of photo"
      size="lg"
      type="url"
      value={photoUrl || ""}
    />
  </BSForm.Group>
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

export default Form;
