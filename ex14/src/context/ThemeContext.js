import React, { createContext, useContext, useState } from 'react';

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    cardBg: "#ffffff",
    btnBg: "#0d6efd",
    btnText: "#ffffff"
  },
  dark: {
    foreground: "#ffffff",
    background: "#212529",
    cardBg: "#2c3035",
    btnBg: "#61dafb",
    btnText: "#000000"
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useState('light');

  const toggleTheme = () => {
    setThemeKey((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = themes[themeKey];

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, themeKey, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
