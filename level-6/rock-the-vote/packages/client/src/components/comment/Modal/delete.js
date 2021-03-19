import React, { useRef, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ConfirmDeletion } from "../../Modal";
import { IssueContext } from "../../../context";
import { TrashButton } from "../../buttons";

export const DeleteCommentFromModal = ({ _id, issueId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { removeComment } = useContext(IssueContext);
  const focusRef = useRef();
  const onDelete = async () => {
    await removeComment(_id, issueId);
    onClose();
  };
  const props = { onDelete, onClose, isOpen, focusRef };
  return (
    <>
      <TrashButton onClick={onOpen} />
      <ConfirmDeletion {...props} />
    </>
  );
};
