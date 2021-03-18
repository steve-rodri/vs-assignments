import { Field } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export const Title = ({ focusRef }) => (
  <Field name="title">
    {({ field, form }) => (
      <FormControl
        id="title"
        isRequired
        isInvalid={form.errors.title && form.touched.title}
      >
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          {...field}
          ref={focusRef}
          id="title"
          type="text"
          variant="filled"
        />
        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

export const Description = () => (
  <Field name="description">
    {({ field, form }) => (
      <FormControl
        id="description"
        isRequired
        isInvalid={form.errors.description && form.touched.description}
      >
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          {...field}
          variant="filled"
          size="xl"
          borderRadius={4}
          p={4}
        />
        <FormErrorMessage>{form.errors.description}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);
