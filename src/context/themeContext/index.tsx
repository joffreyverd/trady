import React, { createContext, useState, useEffect, ReactNode, ReactElement } from 'react';

const ThemeContext = createContext(null);

type Props = {
  children: ReactNode
}

function ThemeProvider({ children }: Props): ReactElement {
  const [themeState, setThemeState] = useState(false);

  function setLocalStorage(theme: string): void {
    localStorage.setItem('Theme', theme);
  }

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    themeState ? setLocalStorage('dark') : setLocalStorage('light');
  }, [themeState]);

  return (
    <ThemeContext.Provider
      value={{
        themeState: themeState,
        setThemeState: setThemeState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
