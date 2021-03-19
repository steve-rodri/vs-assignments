import React, { useContext } from "react";
import { VStack, HStack, Divider, Heading, Spacer } from "@chakra-ui/react";
import { Creator, Body, Date } from "./small";
import { UserContext } from "../../context";
import List from "./List";
import {
  AddCommentFromModalButton,
  EditCommentFromModalButton,
  DeleteCommentFromModalButton,
} from "./Modal";

export const Comment = props => {
  return (
    <VStack align="stretch" spacing={2}>
      <CommentHeader {...props} />
      <Body {...props} />
      <CommentButtons {...props} />
    </VStack>
  );
};

export const CommentHeader = props => {
  return (
    <HStack w="100%">
      <Creator {...props} />
      <Spacer />
      <Date {...props} />
    </HStack>
  );
};

export const CommentButtons = props => {
  const { user } = useContext(UserContext);
  if (user._id !== props.creator._id) return null;
  return (
    <HStack>
      <EditCommentFromModalButton {...props} />
      <DeleteCommentFromModalButton {...props} />
    </HStack>
  );
};

export const CommentSectionHeader = props => {
  return (
    <HStack justify="stretch">
      <Heading>Comments</Heading>
      <Spacer />
      <AddCommentFromModalButton {...props} />
    </HStack>
  );
};

export const CommentListWithHeader = props => {
  return (
    <VStack w="full" align="stretch">
      <CommentSectionHeader {...props} />
      <Divider />
      <List {...props} />
    </VStack>
  );
};

export default Comment;
