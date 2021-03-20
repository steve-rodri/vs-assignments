import React from "react";
import Modal from "../global/modals";
import List from "./list";
import Form from "./form";

export const CommentListInModal = ({ title, ...rest }) => (
  <Modal {...rest} headerContent={title}>
    <List {...rest} />
  </Modal>
);

export const CommentFormInModal = ({ title, focusRef, onClose, ...rest }) => (
  <Modal
    {...rest}
    onClose={onClose}
    initialFocusRef={focusRef}
    headerContent={title}
  >
    <Form {...rest} focusRef={focusRef} closeModal={onClose} />
  </Modal>
);
