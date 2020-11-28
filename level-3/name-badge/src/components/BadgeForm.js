import React, { Component } from "react";
import "./BadgeForm.css";

class BadgeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      bio: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value, type } }) {
    if (type === "tel" && isNaN(value)) return;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBadge({ ...this.state });
    this.resetState();
  }

  resetState() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      bio: "",
    });
  }

  anyInputsEmpty() {
    return (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !this.state.placeOfBirth ||
      !this.state.phone ||
      !this.state.favoriteFood ||
      !this.state.bio
    );
  }

  render() {
    return (
      <form className="BadgeForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
          minLength="3"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange}
          minLength="3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          minLength="3"
        />
        <input
          type="text"
          name="placeOfBirth"
          placeholder="Place of Birth"
          value={this.state.placeOfBirth}
          onChange={this.handleChange}
          minLength="3"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.handleChange}
          minLength="7"
          maxLength="10"
        />
        <input
          type="text"
          name="favoriteFood"
          placeholder="Favorite Food"
          value={this.state.favoriteFood}
          onChange={this.handleChange}
          minLength="3"
        />
        <textarea
          name="bio"
          placeholder="Tell us about yourself"
          value={this.state.bio}
          onChange={this.handleChange}
          minLength="3"
        />
        <button type="submit" disabled={this.anyInputsEmpty()}>
          Submit
        </button>
      </form>
    );
  }
}

export default BadgeForm;
