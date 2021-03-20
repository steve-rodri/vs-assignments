import React from "react";
import { Center, Flex, HStack, Heading } from "@chakra-ui/react";
import { CreateIssueInModalButton } from "../issue/buttons";
import Link from "../Link";

export const PageHeader = () => {
  return (
    <Center py={[4, 8, 12, 16, 20]}>
      <Flex w="full" maxW={1200}>
        <Headline />
        <NavBar />
      </Flex>
    </Center>
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
