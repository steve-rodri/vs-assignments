import React from "react";
import { Flex, HStack, Heading } from "@chakra-ui/react";
import { CreateIssueInModalButton } from "../issue/buttons";
import Link from "../Link";

export const PageHeader = () => {
  return (
    <Flex py={{ base: "4", md: "8" }} px={{ base: "5", md: "12" }}>
      <Headline />
      <NavBar />
    </Flex>
  );
};

const Headline = () => (
  <Link to="/">
    <Heading size="xl">Rock the Vote</Heading>
  </Link>
);

const NavBar = () => {
  return (
    <HStack spacing="10" ml="auto">
      <CreateIssueInModalButton />
    </HStack>
  );
};

export default PageHeader;
