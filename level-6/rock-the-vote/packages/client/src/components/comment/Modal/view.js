import React from "react";
import { useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { CommentsButton } from "../../buttons";
import { CommentListInModal } from ".";

export const ViewCommentsFromModalButton = ({ title, comments, ...rest }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const show = useBreakpointValue({ base: false, sm: true });
  const props = { title, isOpen, onClose, ...rest };
  return (
    <>
      {show && <CommentsButton number={comments.length} onClick={onOpen} />}
      <CommentListInModal {...props} comments={comments} />
    </>
  );
};
