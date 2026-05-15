import { createTheme, type ThemeOptions } from '@mui/material/styles';
import type { Colors } from 'types/theme';

export const themeColors: Colors = {
  base: '#020202',
  secondary: '#7B96AD',
  light1: '#686e7d',
  light2: '#8f96a0',
  light3: '#d2d2cf',
  light4: '#cbd5d5',
  dark1: '#22374A',
  dark2: '#566977',
  dark3: '#babab6',
  dark4: '#acbebf',
  grayscale1: '#F8F8F8',
  grayscale2: '#dfe0e1',
  grayscale3: '#6d6e70',
  grayscale4: '#f5f5f5',
  purple: '#9747FF',
  red: '#FF4773',
  orange: '#FFAA47',
  blue: '#E3EEF9',
  white: '#fff'
};

const palette: ThemeOptions['palette'] = {
  primary: {
    main: themeColors.base,
    light: '#5CA0E3',
    dark: '#070A14',
    contrastText: '#fff'
  },
  secondary: {
    main: '#19857b',
    light: themeColors.light1!,
    dark: '#0f5f57',
    contrastText: '#fff'
  },
  error: {
    main: '#FF8D8D',
    light: '#FF7A9A',
    dark: '#D6003A'
  },
  warning: {
    main: '#FFAA47',
    light: '#FFCC80',
    dark: '#E68A00'
  },
  success: {
    main: '#2ECC71',
    light: '#6EE7A0',
    dark: '#1A9C50'
  },
  info: {
    main: '#5CA0E3',
    light: '#E3EEF9',
    dark: '#2E6FB3'
  },
  background: {
    default: '#FFFFFF',
    paper: '#F8F8F8'
  },
  text: {
    primary: '#161616',
    secondary: '#7B96AD',
    disabled: '#a9abae'
  },
  divider: '#979797'
};

// ─── Typography ─────────────────────────────────────────────────────────────
const typography: ThemeOptions['typography'] = {
  fontFamily: '"Kumbh Sans", sans-serif',
  fontFamilySecondary: '"IBM Plex Sans", sans-serif',
  h1: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.01em'
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.35
  },
  h3: {
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.4
  },
  h4: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.4
  },
  h5: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.5
  },
  h6: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.5
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.5
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.6
  },
  body2: {
    fontSize: '0.8125rem',
    fontWeight: 400,
    lineHeight: 1.6
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#686e7d'
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'none'
  }
};

const shape: ThemeOptions['shape'] = {
  borderRadius: 8
};

const breakpoints: ThemeOptions['breakpoints'] = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    c_xs: 0,
    c_sm: 600,
    c_md: 961,
    c_lg: 1281,
    c_xl: 1537
  }
};

const customShadows = [
  'none', // 0
  '0px 1px 3px rgba(0,0,0,0.08)', // 1 - subtle
  '0px 2px 6px rgba(0,0,0,0.08)', // 2 - card
  '0px 4px 12px rgba(0,0,0,0.1)', // 3 - dropdown
  '0px 8px 24px rgba(0,0,0,0.12)' // 4 - modal
] as const;

const components: ThemeOptions['components'] = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': { boxSizing: 'border-box' },
      'html, body': {
        margin: 0,
        padding: 0,
        fontFamily: '"Nunito Sans", sans-serif'
      },
      '::-webkit-scrollbar': {
        width: 8,
        height: 8
      },
      '::-webkit-scrollbar-thumb': {
        background: '#DCDBE0',
        borderRadius: 5
      }
    }
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: false
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '0.875rem',
        padding: '8px 20px',
        transition: 'all 0.2s ease-in-out'
      },
      sizeSmall: {
        padding: '4px 12px',
        fontSize: '0.8125rem'
      },
      sizeLarge: {
        padding: '12px 28px',
        fontSize: '1rem'
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#1A2540'
        }
      },
      outlined: {
        borderWidth: 1.5,
        '&:hover': {
          borderWidth: 1.5
        }
      }
    }
  },

  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        transition: 'all 0.2s ease-in-out'
      }
    }
  },

  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      size: 'small'
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontSize: '0.875rem',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#dfe0e1',
          transition: 'border-color 0.2s ease-in-out'
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#a9abae'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderWidth: 1.5
        }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '0.875rem',
        fontWeight: 500
      }
    }
  },

  MuiSelect: {
    defaultProps: {
      size: 'small'
    },
    styleOverrides: {
      root: {
        borderRadius: 8
      }
    }
  },

  MuiPaper: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      root: {
        borderRadius: 12,
        border: '1px solid #eee'
      },
      elevation1: {
        boxShadow: '0px 1px 3px rgba(0,0,0,0.08)'
      },
      elevation2: {
        boxShadow: '0px 2px 6px rgba(0,0,0,0.08)'
      },
      elevation3: {
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)'
      },
      elevation4: {
        boxShadow: '0px 8px 24px rgba(0,0,0,0.12)'
      }
    }
  },

  MuiCard: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      root: {
        borderRadius: 12,
        border: '1px solid #eee',
        transition: 'box-shadow 0.2s ease-in-out'
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 20,
        '&:last-child': {
          paddingBottom: 20
        }
      }
    }
  },

  MuiTableHead: {
    styleOverrides: {
      root: {
        '& .MuiTableCell-head': {
          fontWeight: 700,
          fontSize: '0.8125rem',
          color: '#22374A',
          backgroundColor: '#F8F9FA',
          borderBottom: '2px solid #dfe0e1',
          padding: '12px 16px'
        }
      }
    }
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        '& .MuiTableRow-root:hover': {
          backgroundColor: '#f8f9fa'
        }
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: '0.8125rem',
        padding: '12px 16px',
        borderBottom: '1px solid #eee'
      }
    }
  },
  MuiTablePagination: {
    styleOverrides: {
      root: {
        fontSize: '0.8125rem'
      }
    }
  },

  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 16,
        border: 'none',
        boxShadow: '0px 8px 24px rgba(0,0,0,0.12)'
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: '1.125rem',
        fontWeight: 700,
        padding: '20px 24px 12px'
      }
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: '12px 24px'
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: '12px 24px 20px',
        gap: 8
      }
    }
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        fontWeight: 500,
        fontSize: '0.75rem'
      },
      sizeSmall: {
        height: 24
      }
    }
  },

  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '0.875rem',
        minHeight: 44
      }
    }
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: 3,
        borderRadius: '3px 3px 0 0'
      }
    }
  },

  MuiTooltip: {
    defaultProps: {
      arrow: true
    },
    styleOverrides: {
      tooltip: {
        backgroundColor: '#22374A',
        fontSize: '0.75rem',
        borderRadius: 6,
        padding: '6px 12px'
      },
      arrow: {
        color: '#22374A'
      }
    }
  },

  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontSize: '0.8125rem'
      }
    }
  },

  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
        fontSize: '0.8125rem'
      }
    }
  },

  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: 10,
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        border: '1px solid #eee',
        marginTop: 4
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: '0.875rem',
        padding: '8px 16px',
        borderRadius: 6,
        margin: '2px 6px',
        transition: 'background-color 0.15s ease',
        '&:hover': {
          backgroundColor: '#f5f5f5'
        },
        '&.Mui-selected': {
          backgroundColor: '#E3EEF9',
          '&:hover': {
            backgroundColor: '#d1e4f5'
          }
        }
      }
    }
  },

  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        borderRadius: 10,
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        border: '1px solid #eee'
      },
      option: {
        fontSize: '0.875rem',
        borderRadius: 6,
        margin: '2px 6px'
      }
    }
  },

  MuiSkeleton: {
    defaultProps: {
      animation: 'wave'
    },
    styleOverrides: {
      root: {
        borderRadius: 8
      }
    }
  }
};

const theme = createTheme(
  {
    palette,
    typography,
    shape,
    breakpoints,
    spacing: 8,
    shadows: [
      ...customShadows,
      ...Array(20).fill('0px 4px 12px rgba(0,0,0,0.1)')
    ] as ThemeOptions['shadows'],
    components
  },
  { colors: themeColors }
);

export default theme;
