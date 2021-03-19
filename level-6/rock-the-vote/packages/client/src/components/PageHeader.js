import React from "react";
import { Flex, HStack, Heading } from "@chakra-ui/react";
import { CreateIssueFromModalButton } from "./issue/Modal";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <Flex py={{ base: "4", md: "8" }} px={{ base: "5", md: "12" }}>
      <Headline />
      <NavBar />
    </Flex>
  );
};

const Headline = () => (
  <NavLink to="/">
    <Heading size="xl">Rock the Vote</Heading>
  </NavLink>
);

const NavBar = () => {
  return (
    <HStack spacing="10" ml="auto">
      <CreateIssueFromModalButton />
    </HStack>
  );
};

export default Header;
