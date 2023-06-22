import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#ffd8be',
    lightPrimary: '#FFEEDD',
    secondary: '#9381ff',
    lightSecondary: '#EDEDFF',
    warning: '#ff6b35',
    error: '#c1121f',
    lightText: '#f8f7ff',
    greyText: '#9B9B9B',
    darkText: '#000000',
    white: '#FFFFFF',
  },
  fontFamilies: {
    primary: "'Roboto', sans-serif",
  },
  fontSizes: {
    small: '0.8em',
    medium: '1em',
    large: '1.2em',
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
  },
  spaces: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
};

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
