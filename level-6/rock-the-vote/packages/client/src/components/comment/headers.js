import React from "react";
import { HStack, Spacer, Heading } from "@chakra-ui/react";
import { CreateCommentInModalButton } from "./buttons";
import { Creator, Date } from "./text";

export const Header = props => {
  return (
    <HStack w="100%">
      <Creator {...props} />
      <Spacer />
      <Date {...props} />
    </HStack>
  );
};

export const SectionHeader = props => {
  return (
    <HStack justify="stretch">
      <Heading>Comments</Heading>
      <Spacer />
      <CreateCommentInModalButton {...props} />
    </HStack>
  );
};
