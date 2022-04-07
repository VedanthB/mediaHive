import React from "react";
import { SignupCard } from "../components";

const SignupPage = () => {
  return (
    <main className="landingPage__container">
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div className="relative w-full flex justify-center align-items-center">
        <SignupCard />
      </div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
  );
};

export default SignupPage;
