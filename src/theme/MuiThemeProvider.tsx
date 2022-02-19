import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

const MuiThemeProvider: React.FC = ({ children }) => {
  const upperTheme = useTheme();
  console.log('Theme', upperTheme);

  const theme = React.useMemo(() => {
    let newTheme = upperTheme;
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
