import React, { useContext } from "react";
import { HStack } from "@chakra-ui/react";
import { UpvoteButton, DownvoteButton } from "../../global/buttons";
import { UserContext, IssueContext } from "../../../context";

export const VotingButtons = props => {
  const { user } = useContext(UserContext);
  const { addUpvote, removeUpvote, addDownvote, removeDownvote } = useContext(
    IssueContext
  );

  const userUpvoted = props.upvotedUsers.includes(user._id);
  const userDownvoted = props.downvotedUsers.includes(user._id);

  const onUp = async () => {
    if (userUpvoted) await removeUpvote(props);
    else await addUpvote(props);
  };

  const onDown = async () => {
    if (userDownvoted) await removeDownvote(props);
    else await addDownvote(props);
  };

  return (
    <HStack spacing={2}>
      <UpvoteButton {...props} onClick={onUp} highlight={userUpvoted} />
      <DownvoteButton {...props} onClick={onDown} highlight={userDownvoted} />
    </HStack>
  );
};

export default VotingButtons;
