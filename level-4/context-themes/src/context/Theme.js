import React from 'react';
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {
    theme: 'light',
  };

  toggleTheme = () => {
    const { theme } = this.state;
    if (theme === 'light') this.setState({ theme: 'dark' });
    if (theme === 'dark') this.setState({ theme: 'light' });
  };

  render() {
    const valueProps = {
      ...this.state,
      toggleTheme: this.toggleTheme,
    };
    return <Provider value={valueProps}>{this.props.children}</Provider>;
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
