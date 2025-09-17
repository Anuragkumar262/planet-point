import React, { useState } from 'react';
import { showNotification } from '../../utils/notifications';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    showNotification('Theme Changed', `Switched to ${newTheme} mode`, 'info');
  };

  return React.createElement('button', {
    className: 'theme-toggle',
    onClick: toggleTheme,
    title: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`
  }, theme === 'light' ? '🌙' : '☀️');
}

export default ThemeToggle;