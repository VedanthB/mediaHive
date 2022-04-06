import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <header className="nav__header">
      <Logo />

      <NavMenu />
      {/* search bar  */}

      <Link to="/login" class="btn btn-solid-amber shadow-lg text-white">
        Login
      </Link>
    </header>
  );
};

export default Header;
