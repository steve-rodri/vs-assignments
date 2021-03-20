import React, { useRef, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ConfirmDeletionModal } from "../../global/modals";
import { TrashButton } from "../../global/buttons";
import { IssueContext } from "../../../context";

export const DeleteIssueInModalButton = issue => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { remove } = useContext(IssueContext);
  const focusRef = useRef();
  const onDelete = async () => {
    await remove(issue);
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
