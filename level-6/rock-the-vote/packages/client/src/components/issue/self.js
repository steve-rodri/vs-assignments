import React from "react";
import { VStack, Divider } from "@chakra-ui/react";
import { ButtonGroup } from "./buttons";
import { Description } from "./text";
import { Header } from "./headers";

export const Issue = props => {
  return (
    <VStack w="full" align="start">
      <Header {...props} />
      <Divider />
      <Description {...props} />
      <ButtonGroup {...props} />
    </VStack>
  );
};

export default Issue;
