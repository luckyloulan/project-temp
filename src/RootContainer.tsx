import * as React from 'react';

// @mui material components
import Box from '@mui/material/Box';

// @mui material styles
import { styled } from '@mui/material/styles';

import MuiThemeProvider from '@/theme/MuiThemeProvider';

const RootContainer: React.FC = ({ children }) => {
  const [state, setState] = React.useState();

  React.useEffect(() => {}, []);

  return (
    <Box aria-label="RootContainer">
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </Box>
  );
};

export default RootContainer;
