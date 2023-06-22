import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      lightPrimary: string;
      secondary: string;
      lightSecondary: string;
      warning: string;
      error: string;
      lightText: string;
      greyText: string;
      darkText: string;
      white: string;
    };
    fontFamilies: {
      primary: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeights: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
    spaces: {
      small: string;
      medium: string;
      large: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
