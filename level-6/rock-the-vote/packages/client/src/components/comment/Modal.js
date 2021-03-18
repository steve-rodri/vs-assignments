import React, { useRef, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import IssueContext from "../../context/IssueContext";
import {
  AddButton,
  EditButton,
  DeleteButton,
  CommentsButton,
} from "../buttons";
import Modal from "../Modal";
import List from "./List";
import Form from "./Form";

export const CommentList = ({ title, ...rest }) => (
  <Modal {...rest} headerContent={title}>
    <List {...rest} />
  </Modal>
);

const CommentForm = ({ title, focusRef, onClose, ...rest }) => (
  <Modal
    {...rest}
    onClose={onClose}
    initialFocusRef={focusRef}
    headerContent={title}
  >
    <Form {...rest} focusRef={focusRef} closeModal={onClose} />
  </Modal>
);

export const AddCommentFromModal = props => {
  const { onOpen, ...rest } = useDisclosure();
  const focusRef = useRef();
  return (
    <>
      <AddButton onClick={onOpen} />
      <CommentForm
        {...props}
        {...rest}
        title={"Add Comment"}
        focusRef={focusRef}
      />
    </>
  );
};

export const EditCommentFromModal = ({ _id, body, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const focusRef = useRef();
  const props = { ...rest, isOpen, onClose, focusRef };
  return (
    <>
      <EditButton onClick={onOpen} />
      <CommentForm
        {...props}
        title={"Edit Comment"}
        values={{ _id, body }}
        focusRef={focusRef}
      />
    </>
  );
};

export const ViewCommentsFromModal = ({ title, comments, ...rest }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const props = { title, isOpen, onClose, ...rest };
  return (
    <>
      <CommentsButton number={comments.length} onClick={onOpen} />
      <CommentList {...props} comments={comments} />
    </>
  );
};

export const DeleteComment = ({ _id, issueId }) => {
  const { removeComment } = useContext(IssueContext);
  const onDelete = async () => removeComment(_id, issueId);
  return <DeleteButton onClick={onDelete} />;
};
