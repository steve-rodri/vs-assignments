import React from 'react';
import { ThemeContextConsumer } from '../context/Theme';

const Main = () => {
  return (
    <ThemeContextConsumer>
      {({ theme, toggleTheme }) => (
        <main className={theme}>
          <h1>Click the button to toggle the {theme} theme!</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </main>
      )}
    </ThemeContextConsumer>
  );
};

export default Main;
