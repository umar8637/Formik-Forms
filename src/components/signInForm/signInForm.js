import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./signInForm.css";

const SignInForm = ({ toggleForm }) => {
  return (
    <div className="center-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
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
            <h1 className="form-heading">Sign In </h1>
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
            <button type="submit">Login</button>
          </Form>
          <p className="signup-text">
            Don't have an account?
            <button className="signup-button" onClick={toggleForm}>
              Sign Up Here
            </button>
          </p>
        </div>
      </Formik>
    </div>
  );
};

export default SignInForm;
