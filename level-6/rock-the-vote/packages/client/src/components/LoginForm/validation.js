import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Username required"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(32, "Too Long!")
    .required("Password required"),
});

export default validationSchema;
