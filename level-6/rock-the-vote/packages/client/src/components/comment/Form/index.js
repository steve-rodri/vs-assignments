import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import { IssueContext } from "../../../context";
import { SubmitButton } from "../../global/buttons";
import { Body } from "./fields";
import Form from "../../Form";
import schema from "./validation";

export const CommentForm = ({ values, focusRef, issueId, closeModal }) => {
  const { addComment, editComment } = useContext(IssueContext);
  const initialValues = values || { body: "" };

  const onSubmit = async (values, actions) => {
    if (values._id) {
      await editComment(values, issueId);
    } else {
      await addComment(values, issueId);
    }
    actions.setSubmitting(false);
    closeModal();
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <VStack spacing={5} align="center">
        <Body focusRef={focusRef} />
        <SubmitButton />
      </VStack>
    </Form>
  );
};

export default CommentForm;
