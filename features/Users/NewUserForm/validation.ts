//Validation
import { INewUserError, INewUserForm, IUserKey } from "types";
import * as yup from "yup";

const newUserSchema = yup.object().shape({
  name: yup.string().required("Please provide your name"),
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Please provide an email address"),
  address1: yup.string().required("Please provide line one of your address"),
  address2: yup.string(),
  city: yup.string().required("Please provide a city"),
  county: yup.string().required("Please provide a county"),
  postcode: yup.string().required("Please provide a postcode"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 chars long")
    .required("Please provide a password"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const validateNewUserForm = async (
  form: INewUserForm
): Promise<[boolean, INewUserError | null]> => {
  try {
    await newUserSchema.validate(form);
    return [true, null];
  } catch (error) {
    return [
      false,
      {
        key: error.path as IUserKey,
        message: error.errors[0],
      },
    ];
  }
};
