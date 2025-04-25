import { useState, useEffect } from 'react';

type ThemeType = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    // Check if user has theme preference saved in localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    
    // If there's a saved preference, use it
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Otherwise check for system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};
