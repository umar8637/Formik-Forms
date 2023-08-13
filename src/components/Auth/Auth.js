import React, { useState } from "react";
import SignInForm from "../signInForm/signInForm";
import SignupForm from "../signUpForm/signUpForm";

const Auth = () => {
  const [showingUp, setShowingUp] = useState(true);
  const toggleForm = () => {
    setShowingUp(!showingUp);
  };
  return (
    <div>
      {showingUp ? (
        <SignupForm toggleForm={toggleForm} />
      ) : (
        <SignInForm toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default Auth;
