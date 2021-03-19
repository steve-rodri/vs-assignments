import React from "react";
import Modal from "../../Modal";
import List from "../List";
import Form from "../Form";

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

export * from "./create";
export * from "./delete";
export * from "./edit";
export * from "./view";
