import React from "react";
import { VStack, Divider } from "@chakra-ui/react";
import { Header, Description, ButtonGroup } from "./small";

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
