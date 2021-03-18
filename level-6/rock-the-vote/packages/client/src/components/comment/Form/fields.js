import { Field } from "formik";
import { FormControl, FormErrorMessage, Textarea } from "@chakra-ui/react";

export const Body = ({ focusRef }) => (
  <Field name="body">
    {({ field, form }) => (
      <FormControl
        id="body"
        isRequired
        isInvalid={form.errors.body && form.touched.body}
      >
        <Textarea
          {...field}
          ref={focusRef}
          variant="filled"
          size="xl"
          borderRadius={4}
          p={4}
        />
        <FormErrorMessage>{form.errors.body}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);
