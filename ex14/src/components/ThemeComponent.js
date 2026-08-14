import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeComponent = () => {
  const { theme, themeKey, toggleTheme } = useTheme();

  return (
    <div
      className="card shadow-sm p-4 mb-4"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        transition: 'all 0.3s ease'
      }}
    >
      <h3 className="mb-3">1. Theme Switcher (useContext)</h3>
      <p className="mb-3">
        Current Theme: <strong className="text-uppercase">{themeKey}</strong>
      </p>

      <div>
        <button
          className="btn fw-bold px-4 py-2"
          onClick={toggleTheme}
          style={{
            backgroundColor: theme.btnBg,
            color: theme.btnText,
            border: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          Toggle to {themeKey === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeComponent;
