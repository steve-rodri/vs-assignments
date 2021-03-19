import React, { useContext } from "react";
import { Heading, Text, HStack, VStack, Spacer, Flex } from "@chakra-ui/react";
import { EditIssueFromModalButton, DeleteIssueFromModalButton } from "./Modal";
import { ViewCommentsFromModalButton } from "../comment/Modal";
import { UserContext } from "../../context";
import NavLink from "../NavLink";
import VotingButtons from "./VotingButtons";

export const Title = ({ title }) => {
  return (
    <Heading size="lg" variant="title">
      {title}
    </Heading>
  );
};

export const TitleLink = ({ title, _id }) => {
  return (
    <NavLink to={`/${_id}`}>
      <Heading size="lg" variant="title">
        {title}
      </Heading>
    </NavLink>
  );
};

export const Creator = ({ creator }) => {
  return (
    <NavLink to={`/users/${creator._id}`}>
      <Text variant="username">{`@${creator.username}`}</Text>
    </NavLink>
  );
};

export const Header = ({ linkTitle, ...rest }) => {
  return (
    <VStack spacing={1} align="start">
      <Creator {...rest} />
      {linkTitle ? <TitleLink {...rest} /> : <Title {...rest} />}
    </VStack>
  );
};

export const Description = ({ description }) => {
  return <Text variant="body">{description}</Text>;
};

export const ModifierButtons = props => {
  const { user } = useContext(UserContext);
  if (user._id !== props.creator._id) return null;
  return (
    <HStack ml={5}>
      <EditIssueFromModalButton {...props} />
      <DeleteIssueFromModalButton {...props} />
    </HStack>
  );
};

export const ButtonGroup = ({ showCommentButton, ...rest }) => {
  return (
    <Flex w="full">
      <VotingButtons {...rest} />
      <ModifierButtons {...rest} />
      <Spacer />
      {showCommentButton && <ViewCommentsFromModalButton {...rest} />}
    </Flex>
  );
};
