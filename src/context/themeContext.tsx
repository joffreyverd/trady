import React, { createContext, useState, useEffect, ReactNode, ReactElement } from 'react';

const ThemeContext = createContext(null);

type Props = {
  children: ReactNode
};

function ThemeProvider({ children }: Props): ReactElement {
  const [themeState, setThemeState] = useState(false);

  function setLocalStorage(theme: string): void {
    localStorage.setItem('Theme', theme);
  }

  function setBodyThemeClass(theme) {
    const bodyClasses = document.body.classList;
    if (theme === 'dark') {
      bodyClasses.remove('light');
      bodyClasses.add('dark');
    } else {
      bodyClasses.remove('dark');
      bodyClasses.add('light');
    }
  }

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
      setBodyThemeClass('dark');
    } else {
      setThemeState(false);
      setBodyThemeClass('light');
    }
  }, []);

  useEffect(() => {
    if (themeState) {
      setLocalStorage('dark');
      setBodyThemeClass('dark');
    } else {
      setLocalStorage('light');
      setBodyThemeClass('light');
    }
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
