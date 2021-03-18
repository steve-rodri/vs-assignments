import React from "react";
import { VStack } from "@chakra-ui/react";
import { CommentListWithHeader } from "../comment";
import Issue from ".";

const Container = props => {
  return (
    <VStack w="100%" maxW={700} m="auto" spacing={100} pt={9} pb={40} px={5}>
      <Issue {...props} />
      <CommentListWithHeader {...props} issueId={props._id} />
    </VStack>
  );
};

export default Container;
