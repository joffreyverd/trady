import React, { useState, useEffect } from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function ThemeMode(props) {
  const [themeState, setThemeState] = useState(false);
  const { className } = props;

  function setLocalStorage(theme) {
    localStorage.setItem('Theme', theme);
  }

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    const classList = document.body.classList;
    if (themeState) {
      setLocalStorage('dark');
      classList.add('dark');
    } else {
      setLocalStorage('light');
      classList.remove('dark');
    }
  }, [themeState]);

  return (
    <Brightness4Icon
      className={className}
      onClick={() =>
        setThemeState(!themeState)} />
  );
}

export default ThemeMode;
