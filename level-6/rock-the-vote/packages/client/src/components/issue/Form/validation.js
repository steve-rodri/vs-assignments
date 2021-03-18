import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, "Too Short!")
    .max(70, "Too Long!")
    .required("Title required"),
  description: Yup.string()
    .min(5, "Too Short!")
    .required("Description required"),
});

export default validationSchema;
