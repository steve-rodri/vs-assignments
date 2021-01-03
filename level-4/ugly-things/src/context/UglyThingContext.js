import React from "react";
import {
  getThings,
  createThing,
  deleteThing,
  updateThing,
} from "../services/ugly-things-api";
const { Provider, Consumer } = React.createContext();

class UglyThingContextProvider extends React.Component {
  state = {
    things: [],
  };

  async componentDidMount() {
    const things = await getThings();
    this.setState({ things });
  }

  addThing = async data => {
    const thing = await createThing(data);
    this.setState(prevState => ({
      things: [...prevState.things, thing],
    }));
  };

  removeThing = async thing => {
    await deleteThing(thing);
    this.setState(({ things }) => {
      things = things.filter(t => t._id !== thing._id);
      return { things };
    });
  };

  replaceThing = async thing => {
    thing = await updateThing(thing);
    this.setState(({ things }) => {
      things = things.map(t => (t._id === thing._id ? thing : t));
      return { things };
    });
  };

  render() {
    const valueProps = {
      ...this.state,
      addThing: this.addThing,
      deleteThing: this.removeThing,
      updateThing: this.replaceThing,
    };
    return <Provider value={valueProps}>{this.props.children}</Provider>;
  }
}

export { UglyThingContextProvider, Consumer as UglyThingContextConsumer };
