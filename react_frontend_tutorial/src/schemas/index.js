import * as yup from "yup";

const phoneNumberRegex = /^\+\d{1,9}$/;

const companySchema = yup.object().shape({
  name: yup.string().required("Company name is required"),
  description: yup.string()
    .min(5, "Company description must be at least 5 characters")
    .max(200, "Company description must be at most 200 characters")
    .required("Company description is required"),
  phone: yup.string()
    .matches(phoneNumberRegex, "Company phone must be a valid phone number")
    .required("Company phone is required"),
  email: yup.string().email("Must be a valid email").required("Company email is required"),
});

export const basicSchema = yup.object().shape({
  title: yup.string()
    .min(5, "Title must be at least 5 characters")
    .required("Title is required"),
  description: yup.string()
    .min(5, "Description must be at least 5 characters")
    .max(200, "Description must be at most 200 characters")
    .required("Description is required"),
  location: yup.string()
    .required("Location is required"),
  salary: yup.string().required("Salary is required"),
  type: yup.string().required("Type is required"),
  company: companySchema,
});
