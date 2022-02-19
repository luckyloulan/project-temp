import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { getDesignTokens, getThemedComponents } from '@/theme/brandingTheme';

import CssBaseline from '@mui/material/CssBaseline';

const MuiThemeProvider: React.FC = ({ children }) => {
  const upperTheme = useTheme();
  console.log('Theme', upperTheme);
  const mode = upperTheme.palette.mode;
  // const mode = 'dark'

  const theme = React.useMemo(() => {
    const designTokens = getDesignTokens(mode);
    let newTheme = createTheme(designTokens);
    newTheme = deepmerge(newTheme, getThemedComponents(newTheme));

    return newTheme;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
