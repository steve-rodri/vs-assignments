import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { Title, Description } from "./fields";
import { SubmitButton } from "../../global/buttons";
import IssueContext from "../../../context/IssueContext";
import Form from "../../Form";
import schema from "./validation";

export const IssueForm = ({ values, focusRef, closeModal }) => {
  const initialValues = values || { title: "", description: "" };
  const { create, update } = useContext(IssueContext);
  const history = useHistory();

  const onSubmit = async (values, actions) => {
    let newIssue;
    if (values._id) await update(values);
    else newIssue = await create(values);
    actions.setSubmitting(false);
    closeModal();
    if (newIssue) history.push(`/${newIssue._id}`);
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

const Fields = props => {
  return (
    <VStack spacing={5} align="flex-start">
      <Title {...props} />
      <Description />
      <SubmitButton />
    </VStack>
  );
};

export default IssueForm;
