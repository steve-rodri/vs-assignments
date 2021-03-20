import React, { useContext } from "react";
import { HStack, Flex, Spacer } from "@chakra-ui/react";
import { UserContext } from "../../../context";
import { ViewCommentsInModalButton } from "../../comment/buttons";
import { DeleteIssueInModalButton } from "./delete";
import { EditIssueInModalButton } from "./edit";
import { VotingButtons } from "./voting";

export const ModifierButtons = props => {
  const { user } = useContext(UserContext);
  if (user._id !== props.creator._id) return null;
  return (
    <HStack ml={5}>
      <EditIssueInModalButton {...props} />
      <DeleteIssueInModalButton {...props} />
    </HStack>
  );
};

export const ButtonGroup = ({ showCommentsButton, ...rest }) => {
  return (
    <Flex w="full">
      <VotingButtons {...rest} />
      <ModifierButtons {...rest} />
      <Spacer />
      {showCommentsButton && <ViewCommentsInModalButton {...rest} />}
    </Flex>
  );
};

export * from "./create";
export * from "./delete";
export * from "./edit";
export * from "./voting";
