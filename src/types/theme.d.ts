import type { Theme as ThemeMui } from '@mui/material/styles';

export declare type Colors = {
  base: string;
  secondary: string;
  light1?: string;
  light2?: string;
  light3?: string;
  light4?: string;
  dark1?: string;
  dark2?: string;
  dark3?: string;
  dark4?: string;
  grayscale1?: string;
  grayscale2?: string;
  grayscale3?: string;
  grayscale4?: string;
  purple?: string;
  red?: string;
  orange?: string;
  blue?: string;
  white?: string;
};
declare module '@mui/material/styles' {
  interface Theme extends ThemeMui {
    colors: Colors;
  }
  interface BreakpointOverrides {
    c_xs: true;
    c_sm: true;
    c_md: true;
    c_lg: true;
    c_xl: true;
  }
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    fontFamilySecondary: string;
  }

  interface TypographyOptions {
    fontFamilySecondary?: string;
  }
}
