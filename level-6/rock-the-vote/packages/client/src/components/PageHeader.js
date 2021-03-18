import React from "react";
import { Flex, Spacer, HStack, Heading } from "@chakra-ui/react";
import { CreateIssueFromModal } from "./issue/Modal";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <Flex py="8" px="12">
      <Headline />
      <Spacer />
      <NavBar />
    </Flex>
  );
};

const Headline = () => (
  <NavLink to="/">
    <Heading>Rock the Vote</Heading>
  </NavLink>
);

const NavBar = () => {
  return (
    <HStack spacing="10">
      <NavLink to="/">Home</NavLink>
      <CreateIssueFromModal />
    </HStack>
  );
};

export default Header;
