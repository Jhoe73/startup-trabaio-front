import Navbar from './Navbar'
import {CssBaseline, Box, Toolbar} from '@material-ui/core';
import React from 'react';

export default function DashLayout({ children }) {
  return (
    <React.Fragment> 
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
          <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
        <Toolbar />
        {children}
        </Box>
      </Box>
    </React.Fragment> 
  )
}