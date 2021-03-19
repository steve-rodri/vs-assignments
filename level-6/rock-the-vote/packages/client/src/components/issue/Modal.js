import React, { useRef, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { AddButton, EditButton, TrashButton } from "../buttons";
import IssueContext from "../../context/IssueContext";
import Modal, { ConfirmDeletion } from "../Modal";
import Form from "./Form";

export const IssueForm = ({ title, focusRef, onClose, ...rest }) => (
  <Modal
    {...rest}
    onClose={onClose}
    initialFocusRef={focusRef}
    headerContent={title}
  >
    <Form {...rest} focusRef={focusRef} closeModal={onClose} />
  </Modal>
);

export const CreateIssueFromModal = props => {
  const { onOpen, ...rest } = useDisclosure();
  const focusRef = useRef();
  return (
    <>
      <AddButton onClick={onOpen} />
      <IssueForm
        {...props}
        {...rest}
        title={"Create a New Issue"}
        focusRef={focusRef}
      />
    </>
  );
};

export const EditIssueFromModal = props => {
  const { onOpen, ...rest } = useDisclosure();
  const focusRef = useRef();
  return (
    <>
      <EditButton onClick={onOpen} />
      <IssueForm
        {...props}
        {...rest}
        title={"Edit Issue"}
        values={props}
        focusRef={focusRef}
      />
    </>
  );
};

export const DeleteIssueFromModal = issue => {
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
