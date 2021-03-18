import React, { useRef, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { AddButton, EditButton, DeleteButton } from "../buttons";
import IssueContext from "../../context/IssueContext";
import Modal from "../Modal";
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

export const DeleteIssue = issue => {
  const { remove } = useContext(IssueContext);
  const onDelete = async () => remove(issue);
  return <DeleteButton onClick={onDelete} />;
};
