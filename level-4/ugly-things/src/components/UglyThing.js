import React from "react";
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
          <li>
            {this.state.editing ? (
              <Form {...this.props} stopEditing={this.stopEditing} />
            ) : (
              <>
                <img src={imgUrl} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={this.startEditing}>Edit</button>
                <button onClick={() => deleteThing(index)}>Delete</button>
              </>
            )}
          </li>
        )}
      </UglyThingContextConsumer>
    );
  }
}

export default UglyThing;
