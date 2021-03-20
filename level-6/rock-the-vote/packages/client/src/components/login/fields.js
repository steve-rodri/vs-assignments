import { Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export const Username = () => (
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

export const Password = () => (
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
