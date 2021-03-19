import React, { useContext } from "react";
import { Flex, HStack, VStack, Divider, Spacer } from "@chakra-ui/react";
import { Title, TitleLink, Description, Creator, Votes } from "./sub";
import { ViewCommentsFromModal } from "../comment/Modal";
import { EditIssueFromModal, DeleteIssueFromModal } from "../issue/Modal";
import UserContext from "../../context/UserContext";

export const Issue = props => {
  return (
    <VStack w="full" align="start">
      <Header {...props} />
      <Divider />
      <Description {...props} />
      <Buttons {...props} />
    </VStack>
  );
};

const Header = ({ linkTitle, ...rest }) => {
  return (
    <VStack spacing={1} align="start">
      <Creator {...rest} />
      {linkTitle ? <TitleLink {...rest} /> : <Title {...rest} />}
    </VStack>
  );
};

const Buttons = ({ showCommentButton, ...rest }) => {
  return (
    <Flex w="full">
      <Votes {...rest} />
      <Modifiers {...rest} />
      <Spacer />
      {showCommentButton && <ViewCommentsFromModal {...rest} />}
    </Flex>
  );
};

const Modifiers = props => {
  const { user } = useContext(UserContext);
  if (user._id !== props.creator._id) return null;
  return (
    <HStack ml={5}>
      <EditIssueFromModal {...props} />
      <DeleteIssueFromModal {...props} />
    </HStack>
  );
};

export default Issue;
