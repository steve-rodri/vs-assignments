import React from "react";
import { Center, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import { ColorModeButton } from "./buttons";
import Link from "../Link";

export const PageHeader = () => {
  return (
    <Center pt={[4, 8, 12, 16]}>
      <Flex w="full" maxW={1200} px={[4, 8, 12, 16]} align="center">
        <Headline />
        <Spacer />
        <ToggleColorModeButton />
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

const ToggleColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <ColorModeButton onClick={toggleColorMode} mode={colorMode} />;
};

export default PageHeader;
