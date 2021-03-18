import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { Title, Description } from "./fields";
import { SubmitButton } from "../../buttons";
import IssueContext from "../../../context/IssueContext";
import Form from "../../Form";
import schema from "./validation";

export const IssueForm = ({ values, focusRef, closeModal }) => {
  const history = useHistory();
  const { add, update } = useContext(IssueContext);
  const initialValues = values || { body: "" };

  const onSubmit = async (values, actions) => {
    if (values._id) {
      await update(values);
    } else {
      const issue = await add(values);
      closeModal();
      history.push(`/${issue._id}`);
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
      <Fields focusRef={focusRef} />
    </Form>
  );
};

const Fields = ({ focusRef }) => {
  return (
    <VStack spacing={5} align="flex-start">
      <Title focusRef={focusRef} />
      <Description />
      <SubmitButton />
    </VStack>
  );
};

export default IssueForm;
