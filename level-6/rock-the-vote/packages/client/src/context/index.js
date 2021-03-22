import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./UserContext";
import { IssueProvider } from "./IssueContext";
import theme from "../theme";

export const RootProvider = ({ children }) => (
  <ChakraProvider theme={theme}>
    <UserProvider>
      <IssueProvider>{children}</IssueProvider>
    </UserProvider>
  </ChakraProvider>
);

export { default as UserContext } from "./UserContext";
export { default as IssueContext } from "./IssueContext";
export default RootProvider;
