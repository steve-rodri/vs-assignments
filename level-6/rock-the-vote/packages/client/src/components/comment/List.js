import React from "react";
import { VStack, Divider } from "@chakra-ui/react";
import { SectionHeader } from "./headers";
import Comment from "./self";

export const List = ({ comments, issueId }) => {
  return (
    <VStack px={0} spacing={7} align="stretch">
      {comments.map(comment => (
        <Comment key={comment._id} {...comment} issueId={issueId} />
      ))}
    </VStack>
  );
};

export const ListWithHeader = props => {
  return (
    <VStack w="full" align="stretch">
      <SectionHeader {...props} />
      <Divider />
      <List {...props} />
    </VStack>
  );
};

export default List;
