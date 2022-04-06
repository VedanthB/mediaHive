import React from 'react';
import { Link } from 'react-router-dom';
import { authActions } from '../../context/constants';
import { useAuth } from '../../context/providers';

import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = () => {
  const {
    authState: { encodedToken },
    authDispatch
  } = useAuth();

  return (
    <header className="nav__header">
      <Logo />

      <NavMenu />
      {/* search bar  */}

      {encodedToken ? (
        <div
          onClick={() => authDispatch({ type: authActions.LOGOUT_SUCCESS })}
          className="btn btn-solid-amber shadow-lg text-white">
          Logout
        </div>
      ) : (
        <Link to="/login" className="btn btn-solid-amber shadow-lg text-white">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
