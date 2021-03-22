import React from "react";
import {
  Center,
  Flex,
  HStack,
  Heading,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { CreateIssueInModalButton } from "../issue";
import { ColorModeButton } from "./buttons";
import Link from "../Link";

export const PageHeader = () => {
  return (
    <Center py={[4, 8]}>
      <Flex w="full" px={[4, 8, 12, 16]} maxW={1200} align="center">
        <Headline />
        <Spacer />
        <NavBar />
      </Flex>
    </Center>
  );
};

const Headline = () => (
  <Link to="/">
    <Heading fontSize={["4xl", "5xl", "6xl", "7xl"]} fontFamily="Lobster Two">
      Rock the Vote
    </Heading>
  </Link>
);

const NavBar = () => (
  <HStack>
    <ToggleColorModeButton />
    <CreateIssueInModalButton />
  </HStack>
);

const ToggleColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <ColorModeButton onClick={toggleColorMode} mode={colorMode} />;
};

export default PageHeader;
