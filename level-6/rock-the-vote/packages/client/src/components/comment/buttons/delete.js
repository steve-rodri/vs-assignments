import React, { useRef, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ConfirmDeletionModal } from "../../global/modals";
import { TrashButton } from "../../global/buttons";
import { IssueContext } from "../../../context";

export const DeleteCommentInModalButton = ({ _id, issueId }) => {
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
      <ConfirmDeletionModal {...props} />
    </>
  );
};
