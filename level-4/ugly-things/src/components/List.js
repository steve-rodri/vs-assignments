import React from "react";
import { UglyThingContextConsumer } from "../context/UglyThingContext";
import UglyThing from "./UglyThing";
import "../styles/List.css";

const List = () => {
  return (
    <UglyThingContextConsumer>
      {({ things }) => (
        <ul>
          {things.map((props, i) => (
            <UglyThing {...props} index={i} key={i} />
          ))}
        </ul>
      )}
    </UglyThingContextConsumer>
  );
};

export default List;
