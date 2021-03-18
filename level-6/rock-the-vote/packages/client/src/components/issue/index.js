import React, { useContext } from "react";
import { HStack, VStack, Divider, Spacer } from "@chakra-ui/react";
import { Title, TitleLink, Description, Creator, Votes } from "./sub";
import { ViewCommentsFromModal } from "../comment/Modal";
import { EditIssueFromModal, DeleteIssue } from "../issue/Modal";
import UserContext from "../../context/UserContext";

export const Issue = props => {
  return (
    <VStack minW={300} align="start">
      <Title {...props} />
      <Divider />
      <Description {...props} />
      <Footer {...props} />
    </VStack>
  );
};

export const Tile = props => {
  return (
    <VStack spacing={2} align="stretch">
      <Header {...props} />
      <Divider />
      <Description {...props} />
      <Footer {...props} showCommentButton />
    </VStack>
  );
};

const Header = props => {
  return (
    <VStack spacing={1} align="start">
      <Creator {...props} />
      <TitleLink {...props} />
    </VStack>
  );
};

const Footer = ({ showCommentButton, ...rest }) => {
  return (
    <HStack spacing={5} justify="end">
      <Votes {...rest} />
      {!showCommentButton && <Spacer />}
      <Buttons {...rest} />
      <Spacer />
      {showCommentButton && <ViewCommentsFromModal {...rest} />}
    </HStack>
  );
};

export const Buttons = props => {
  const { user } = useContext(UserContext);
  if (user._id !== props.creator._id) return null;
  return (
    <HStack>
      <EditIssueFromModal {...props} />
      <DeleteIssue {...props} />
    </HStack>
  );
};

export default Issue;
