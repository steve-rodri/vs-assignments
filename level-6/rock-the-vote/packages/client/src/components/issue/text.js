import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import Link from "../Link";

export const Title = ({ title }) => {
  return (
    <Heading size="lg" variant="title">
      {title}
    </Heading>
  );
};

export const TitleLink = ({ title, _id }) => {
  return (
    <Link to={`/${_id}`}>
      <Heading size="lg" variant="title">
        {title}
      </Heading>
    </Link>
  );
};

export const Creator = ({ creator }) => {
  return (
    <Link to={`/users/${creator._id}`}>
      <Text variant="username">{`@${creator.username}`}</Text>
    </Link>
  );
};

export const Description = ({ description }) => {
  return <Text variant="body">{description}</Text>;
};
