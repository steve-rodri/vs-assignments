import React, { useRef, useContext } from "react";
import { useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { AddButton, EditButton, TrashButton, CommentsButton } from "../buttons";
import { IssueContext } from "../../context";
import Modal, { ConfirmDeletion } from "../Modal";
import List from "./List";
import Form from "./Form";

export const CommentListInModal = ({ title, ...rest }) => (
  <Modal {...rest} headerContent={title}>
    <List {...rest} />
  </Modal>
);

const CommentFormInModal = ({ title, focusRef, onClose, ...rest }) => (
  <Modal
    {...rest}
    onClose={onClose}
    initialFocusRef={focusRef}
    headerContent={title}
  >
    <Form {...rest} focusRef={focusRef} closeModal={onClose} />
  </Modal>
);

export const AddCommentFromModalButton = props => {
  const { onOpen, ...rest } = useDisclosure();
  const focusRef = useRef();
  return (
    <>
      <AddButton onClick={onOpen} />
      <CommentFormInModal
        {...props}
        {...rest}
        title={"Add Comment"}
        focusRef={focusRef}
      />
    </>
  );
};

export const EditCommentFromModalButton = ({ _id, body, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const focusRef = useRef();
  const props = { ...rest, isOpen, onClose, focusRef };
  return (
    <>
      <EditButton onClick={onOpen} />
      <CommentFormInModal
        {...props}
        title={"Edit Comment"}
        values={{ _id, body }}
        focusRef={focusRef}
      />
    </>
  );
};

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
