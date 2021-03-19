import React from "react";
import { VStack } from "@chakra-ui/react";
import { CommentListWithHeader } from "../comment";
import Issue from ".";

const Container = props => {
  return (
    <VStack w="full" m="auto" pt={9} pb={20} px={5} maxW={700} spacing={100}>
      <Issue {...props} />
      <CommentListWithHeader {...props} issueId={props._id} />
    </VStack>
  );
};

export default Container;
