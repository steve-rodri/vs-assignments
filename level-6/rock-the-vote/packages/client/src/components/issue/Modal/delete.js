import React, { useRef, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { IssueContext } from "../../../context";
import { ConfirmDeletion } from "../../Modal";
import { TrashButton } from "../../buttons";

export const DeleteIssueFromModalButton = issue => {
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
      <ConfirmDeletion {...props} />
    </>
  );
};
