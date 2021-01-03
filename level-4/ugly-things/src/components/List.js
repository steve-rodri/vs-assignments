import React from "react";
import UglyThing from "./UglyThing";
import { UglyThingContextConsumer } from "../context/UglyThingContext";

const List = () => {
  return (
    <UglyThingContextConsumer>
      {({ things }) => (
        <ul>
          {things.map((props, i) => (
            <UglyThing {...props} key={i} />
          ))}
        </ul>
      )}
    </UglyThingContextConsumer>
  );
};

export default List;
