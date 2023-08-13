import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./signupForm.css";

const SignupForm = ({ toggleForm }) => {
  return (
    <div className="center-container">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "must be 20 characterrs or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid Email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "must be 8 characters or greater")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        <div className="form-container">
          <Form>
            <h1 className="form-heading">Sign Up </h1>
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-field"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error-message"
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-field"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="error-message"
            />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="form-field"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="form-field"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
            <button type="submit">Submit</button>
          </Form>
          <p className="signin-text">
            Already have an account?
            <button className="signin-button" onClick={toggleForm}>
              Sign In Here
            </button>
          </p>
        </div>
      </Formik>
    </div>
  );
};

export default SignupForm;
