import React, { useContext } from "react";
import { Heading, Text, HStack } from "@chakra-ui/react";
import { UpvoteButton, DownvoteButton } from "../buttons";
import UserContext from "../../context/UserContext";
import IssueContext from "../../context/IssueContext";
import NavLink from "../NavLink";

export const Title = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export const TitleLink = ({ title, _id }) => {
  return (
    <NavLink to={`/${_id}`}>
      <Heading>{title}</Heading>
    </NavLink>
  );
};

export const Creator = ({ creator }) => {
  return (
    <NavLink to={`/users/${creator._id}`}>
      <Text>{`@${creator.username}`}</Text>
    </NavLink>
  );
};

export const Description = ({ description }) => {
  return <Text>{description}</Text>;
};

export const Votes = props => {
  const { user } = useContext(UserContext);
  const { addUpvote, removeUpvote, addDownvote, removeDownvote } = useContext(
    IssueContext
  );

  const userUpvoted = props.upvotedUsers.includes(user._id);
  const userDownvoted = props.downvotedUsers.includes(user._id);

  const onUpvote = async () => {
    if (userUpvoted) await removeUpvote(props);
    else await addUpvote(props);
  };

  const onDownvote = async () => {
    if (userDownvoted) await removeDownvote(props);
    else await addDownvote(props);
  };

  return (
    <HStack spacing={2}>
      <UpvoteButton {...props} onClick={onUpvote} highlight={userUpvoted} />
      <DownvoteButton
        {...props}
        onClick={onDownvote}
        highlight={userDownvoted}
      />
    </HStack>
  );
};
