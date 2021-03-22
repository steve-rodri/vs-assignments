import React from "react";
import { VStack } from "@chakra-ui/react";
import { ModifierButtons } from "./buttons";
import { Header } from "./headers";
import { Body } from "./text";

export const Comment = props => {
  return (
    <VStack align="stretch" spacing={2}>
      <Header {...props} />
      <Body {...props} />
      <ModifierButtons {...props} />
    </VStack>
  );
};

export default Comment;
