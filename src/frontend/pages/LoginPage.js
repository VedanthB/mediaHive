import React from 'react';
import { LoginCard } from '../components';

const LoginPage = () => {
  return (
    <main className="landingPage__container">
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div className="relative w-full flex justify-center align-items-center">
        <LoginCard />
      </div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
  );
};

export default LoginPage;
