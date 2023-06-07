import { Formik } from "formik";
import * as yup from "yup";

import { addOrder } from "../../services/api";

import {
  FormikForm,
  FormikInput,
  FormikLabel,
  FormikError,
  Button,
} from "./Form.styled";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces."
    )
    .required("name is a required field"),
  email: yup
    .string()
    .trim()
    .min(8, "Too short email! Please, enter min 8 symbols")
    .max(30, "Too long email! Please, enter max 30 symbols")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      "Email can only contain English letters."
    )
    .required("email is a required field"),
  phone: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    )
    .required("number is a required field"),
  address: yup.string().required("address is a required field"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export const Form = () => {
  const handleSubmit = (values, { resetForm }) => {
    addOrder(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormikForm autoComplete="off">
        <FormikLabel htmlFor="name">Name:</FormikLabel>
        <FormikInput type="text" name="name" placeholder="Username" />
        <FormikError name="name" component="p" />
        <FormikLabel htmlFor="email">Email:</FormikLabel>
        <FormikInput type="email" name="email" placeholder="Email" />
        <FormikError name="email" component="p" />
        <FormikLabel htmlFor="phone">Phone:</FormikLabel>
        <FormikInput type="tel" name="phone" placeholder="Phone" />
        <FormikError name="phone" component="p" />
        <FormikLabel htmlFor="name">Address:</FormikLabel>
        <FormikInput type="text" name="address" placeholder="Address" />
        <FormikError name="address" component="p" />
        <Button type="submit">Submit</Button>
      </FormikForm>
    </Formik>
  );
};
