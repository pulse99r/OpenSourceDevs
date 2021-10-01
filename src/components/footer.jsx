import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import HelpIcon from '@mui/icons-material/Help';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        sx={{ top: 'auto', bottom: 0, flexGrow: 1 }}
      >
        <Toolbar>
          <p>© Copyright {year} | Open Source Allstars</p>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color='inherit'>
            <a
              href='https://www.getscriptordietryin.com/contributing-to-open-source-made-simple-a-starter-guide-for-2021'
              target='_blank'
              rel='noopener noreferrer'
            >
              <HelpIcon />
            </a>
          </IconButton>
          <IconButton color='inherit'>
            <a
              href='https://github.com/MightyJoeW/OpenSourceAllstars'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon />
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
