import React from "react";
import { Formik, Form as FormikForm } from "formik";

export const Form = ({ initialValues, onSubmit, schema, children }) => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
};

export default Form;
