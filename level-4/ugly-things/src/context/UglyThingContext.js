import React from "react";
const { Provider, Consumer } = React.createContext();

class UglyThingContextProvider extends React.Component {
  state = {
    things: [],
  };

  addThing = thing => {
    this.setState(prevState => ({
      things: [...prevState.things, thing],
    }));
  };

  deleteThing = i => {
    this.setState(({ things }) => {
      things.splice(i, 1);
      return things;
    });
  };

  updateThing = (thing, i) => {
    this.setState(({ things }) => {
      things.splice(i, 1, thing);
      return things;
    });
  };

  render() {
    const valueProps = {
      ...this.state,
      addThing: this.addThing,
      deleteThing: this.deleteThing,
      updateThing: this.updateThing,
    };
    return <Provider value={valueProps}>{this.props.children}</Provider>;
  }
}

export { UglyThingContextProvider, Consumer as UglyThingContextConsumer };
