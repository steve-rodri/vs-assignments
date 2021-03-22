import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  body: Yup.string().min(1, "Too Short!"),
});

export default validationSchema;
