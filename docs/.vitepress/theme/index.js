import DefaultTheme from 'vitepress/theme';
import '../theme.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Apply the default theme logic
    DefaultTheme.enhanceApp?.({ app });

    // Add theme switching logic
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

    // Listen for changes in the system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });
  },
};