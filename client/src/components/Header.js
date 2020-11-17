import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            <h1>RECETARIO</h1>
          </Link>
        </li>
        <li>
          <h1>BIENVENIDOS</h1>
        </li>
        <li class="logo"></li>
      </ul>
    </header>
  );
};

export default Header;
