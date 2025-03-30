import DefaultTheme from 'vitepress/theme';
import '../theme.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Apply the default theme logic
    DefaultTheme.enhanceApp?.({ app });

  },
};