import React from "react";
import { VStack } from "@chakra-ui/react";
import { CommentListWithHeader } from "../comment";
import Issue from ".";

export const Detail = props => {
  return (
    <VStack w="full" m="auto" py={10} px={5} maxW={700} spacing={100}>
      <Issue {...props} />
      <CommentListWithHeader {...props} issueId={props._id} />
    </VStack>
  );
};

export default Detail;
