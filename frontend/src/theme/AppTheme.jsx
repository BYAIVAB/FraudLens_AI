import * as React from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './themePrimitives';

export default function AppTheme({ children }) {
  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline enableColorScheme />
      {children}
    </CssVarsProvider>
  );
}
