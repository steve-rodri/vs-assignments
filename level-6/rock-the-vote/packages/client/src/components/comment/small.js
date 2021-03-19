import React, { useContext } from "react";
import { HStack, Spacer, Heading, Text } from "@chakra-ui/react";
import { UserContext } from "../../context";
import NavLink from "../NavLink";
import moment from "moment";
import {
  AddCommentFromModalButton,
  EditCommentFromModalButton,
  DeleteCommentFromModalButton,
} from "./Modal";

export const Date = ({ date }) => {
  const timePosted = moment(date).fromNow();
  return <Text>{timePosted}</Text>;
};

export const Body = ({ body }) => {
  return <Text>{body}</Text>;
};

export const Creator = ({ creator }) => {
  return (
    <NavLink to={`/users/${creator._id}`}>
      <Text>{`@${creator.username}`}</Text>
    </NavLink>
  );
};

export const Header = props => {
  return (
    <HStack w="100%">
      <Creator {...props} />
      <Spacer />
      <Date {...props} />
    </HStack>
  );
};

export const SectionHeader = props => {
  return (
    <HStack justify="stretch">
      <Heading>Comments</Heading>
      <Spacer />
      <AddCommentFromModalButton {...props} />
    </HStack>
  );
};

export const ModifierButtons = props => {
  const { user } = useContext(UserContext);
  if (user._id !== props.creator._id) return null;
  return (
    <HStack>
      <EditCommentFromModalButton {...props} />
      <DeleteCommentFromModalButton {...props} />
    </HStack>
  );
};
