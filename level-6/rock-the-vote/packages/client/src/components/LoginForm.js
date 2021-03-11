import React, { useContext, useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import UserContext from "../context/UserContext";

const LoginForm = () => {
  const { login, signup, error } = useContext(UserContext);
  const [type, setType] = useState("Sign Up");
  const initialValues = { username: "", password: "" };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Username required"),
    password: Yup.string()
      .min(4, "Too Short!")
      .max(32, "Too Long!")
      .required("Password required"),
  });
  const onSubmit = async (values, actions) => {
    if (type === "Login") await login(values);
    if (type === "Sign Up") await signup(values);
    actions.setSubmitting(false);
  };
  const formikProps = { initialValues, onSubmit, validationSchema };

  const switchType = () => {
    if (type === "Login") setType("Sign Up");
    if (type === "Sign Up") setType("Login");
  };
  return (
    <Formik {...formikProps}>
      {props => (
        <Form>
          <VStack p="25" spacing="25" borderWidth="1px" borderRadius="lg">
            <Username {...props} />
            <Password {...props} />
            <SubmitButton {...props} type={type} />
            {error && <Text color="crimson">{error}</Text>}
            <AlreadySignedUp type={type} switchType={switchType} />
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

const Username = () => (
  <Field name="username">
    {({ field, form }) => (
      <FormControl
        id="username"
        isRequired
        isInvalid={form.errors.username && form.touched.username}
      >
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          {...field}
          id="username"
          type="text"
          placeholder="username"
          variant="filled"
        />
        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

const Password = () => (
  <Field name="password">
    {({ field, form }) => (
      <FormControl
        id="password"
        isRequired
        isInvalid={form.errors.password && form.touched.password}
      >
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          {...field}
          id="password"
          type="password"
          placeholder="password"
          variant="filled"
        />
        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

const SubmitButton = ({ type }) => {
  return (
    <Button
      size="lg"
      type="submit"
      // isLoading={isSubmitting}
      // loadingText="Submitting"
      variant="outline"
    >
      {type}
    </Button>
  );
};

const AlreadySignedUp = ({ type, switchType }) => {
  return (
    <Button size="sm" variant="link" onClick={switchType}>
      {type === "Login" ? "Sign Up instead..." : "Already Signed Up?"}
    </Button>
  );
};

export default LoginForm;
