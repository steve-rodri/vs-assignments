import React from "react";
import moment from "moment";
import { Text } from "@chakra-ui/react";
import NavLink from "../NavLink";

export const Creator = ({ creator }) => {
  return (
    <NavLink to={`/users/${creator._id}`}>
      <Text>{`@${creator.username}`}</Text>
    </NavLink>
  );
};

export const Date = ({ date }) => {
  const timePosted = moment(date).fromNow();
  return <Text>{timePosted}</Text>;
};

export const Body = ({ body }) => {
  return <Text>{body}</Text>;
};
