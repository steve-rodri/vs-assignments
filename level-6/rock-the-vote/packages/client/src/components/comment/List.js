import React from "react";
import Comment from ".";
import { VStack } from "@chakra-ui/react";

const List = ({ comments, issueId }) => {
  return (
    <VStack px={0} spacing={7} align="stretch">
      {comments.map(comment => (
        <Comment key={comment._id} {...comment} issueId={issueId} />
      ))}
    </VStack>
  );
};

export default List;
