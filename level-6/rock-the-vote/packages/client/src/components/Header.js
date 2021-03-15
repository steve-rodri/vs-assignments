import React from "react";
import { Flex, Spacer, HStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex py="8" px="12">
      <NavLink to="/">
        <Heading>Rock the Vote</Heading>
      </NavLink>
      <Spacer />
      <NavBar />
    </Flex>
  );
};

const NavBar = () => {
  return (
    <HStack spacing="10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">Create</NavLink>
    </HStack>
  );
};

const NavLink = ({ children, ...rest }) => {
  return (
    <Link {...rest}>
      <Button variant="link">{children}</Button>
    </Link>
  );
};

export default Header;
