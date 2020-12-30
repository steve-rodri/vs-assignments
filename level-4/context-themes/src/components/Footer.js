import React from 'react';
import { ThemeContextConsumer } from '../context/Theme';

const Footer = () => {
  return (
    <ThemeContextConsumer>
      {({ theme }) => (
        <footer className={theme}>
          <p>The amazing footer</p>
        </footer>
      )}
    </ThemeContextConsumer>
  );
};

export default Footer;
