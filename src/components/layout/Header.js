import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { Link } from 'react-router-dom';
import '../../style/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color='goldenrod'
        variant='h6'
        component={'div'}
        sx={{ flexGrow: 1, my: 2 }}>
        {/* <FormatBoldIcon /> */}
        Blueline Investments 
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li>
          <Link to={'/home'}>Home</Link>
        </li>
        <li>
          <Link to={'/options'}>Options</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar
          component={'nav'}
          sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
              onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography
              color='goldenrod'
              variant='h6'
              component={'div'}
              sx={{ flexGrow: 1 }}>
              {/* <FormatBoldIcon /> */}
              Blueline Investments 
            </Typography>
            <Box
              sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/home'}>Home</Link>
                </li>
                <li>
                  <Link to={'/options'}>Options</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer variant='temporary'
            open={mobileOpen} onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px'
              }
            }}>{drawer}</Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  )
}

export default Header;