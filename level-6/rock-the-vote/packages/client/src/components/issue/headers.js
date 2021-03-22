import { VStack } from "@chakra-ui/react";
import { Creator, TitleLink, Title } from "./text";

export const Header = ({ linkTitle, ...rest }) => {
  return (
    <VStack spacing={1} align="start">
      <Creator {...rest} />
      {linkTitle ? <TitleLink {...rest} /> : <Title {...rest} />}
    </VStack>
  );
};
