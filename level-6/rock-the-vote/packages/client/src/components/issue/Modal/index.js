import React from "react";
import Modal from "../../Modal";
import Form from "../Form";

export const IssueFormInModal = ({ title, focusRef, onClose, ...rest }) => (
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
