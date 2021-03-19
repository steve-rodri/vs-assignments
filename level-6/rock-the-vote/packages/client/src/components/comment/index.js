import React from "react";
import { VStack } from "@chakra-ui/react";
import { Header, Body, ModifierButtons } from "./small";

export const Comment = props => {
  return (
    <VStack align="stretch" spacing={2}>
      <Header {...props} />
      <Body {...props} />
      <ModifierButtons {...props} />
    </VStack>
  );
};

export * from "./List";
export * from "./Modal";
export default Comment;
