import React, { useContext, useState } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { Username, Password } from "./fields";
import { SubmitButton, AlreadySignedUpButton } from "../buttons";
import UserContext from "../../context/UserContext";
import Form from "../Form";
import schema from "./validation";

export const LoginForm = () => {
  const [type, setType] = useState("Sign Up");
  const { login, signup, error } = useContext(UserContext);

  const switchType = () => {
    if (type === "Login") setType("Sign Up");
    if (type === "Sign Up") setType("Login");
  };

  const onSubmit = async (values, actions) => {
    if (type === "Login") await login(values);
    if (type === "Sign Up") await signup(values);
    actions.setSubmitting(false);
  };

  const initialValues = { username: "", password: "" };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <Fields error={error} type={type} switchType={switchType} />
    </Form>
  );
};

const Fields = props => {
  return (
    <VStack p="25" spacing="25" borderWidth="1px" borderRadius="lg">
      <Username {...props} />
      <Password {...props} />
      <Buttons {...props} />
    </VStack>
  );
};

const Buttons = props => {
  return (
    <>
      <SubmitButton {...props} />
      <DatabaseErrorMessage {...props} />
      <AlreadySignedUpButton {...props} />
    </>
  );
};

const DatabaseErrorMessage = ({ error }) => {
  if (!error) return null;
  return <Text color="crimson">{error}</Text>;
};

export default LoginForm;
