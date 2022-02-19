import * as React from 'react';

// @mui material components
import Box from '@mui/material/Box';

// @mui material styles
import { styled } from '@mui/material/styles';

// Layout Container

// custom components

const RootContainer: React.FC = ({ children }) => {
  const [state, setState] = React.useState();

  React.useEffect(() => {}, []);

  return <Box aria-label="RootContainer">{children}</Box>;
};

export default RootContainer;
