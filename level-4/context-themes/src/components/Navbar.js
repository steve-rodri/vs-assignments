import React from 'react';
import { ThemeContextConsumer } from '../context/Theme';

const Navbar = () => {
  return (
    <ThemeContextConsumer>
      {({ theme }) => (
        <nav className={theme}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </ThemeContextConsumer>
  );
};

export default Navbar;
