/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import * as themes from './schema.json';

export const useTheme = () => {
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setTheme(mode);
  };
  useEffect(() => {
    try {
      setThemeLoaded(true);
    } catch (error) {
      setThemeLoaded(false);
    }
  }, []);
  return { theme, themeLoaded, setMode };
};
