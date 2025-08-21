import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from '../ThemeContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const { toggleTheme, mode } = useThemeMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'About', path: '/about' },
    { name: 'Booking', path: '/booking' },
    { name: 'Login', path: '/login' },
    { name: 'Signup', path: '/signup' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: theme.palette.mode === 'dark'
            ?  'linear-gradient(to right, #e9731fff, #e6c454ff)'
            : 'linear-gradient(to right, #e9731fff, #e6c454ff)',
          color: '#fff',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Brand Title */}
          <Typography variant="h6" fontWeight="bold">
            FastrackBus
          </Typography>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6, alignItems: 'center' }}>
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#f1f1f1',
                  borderBottom: isActive ? '2px solid #fff' : 'none',
                  paddingBottom: '4px',
                  fontWeight: isActive ? 'bold' : 'normal',
                  
                })}
              >


                <Typography
        sx={{
          fontSize: { xs: '1rem', md: '1.5rem' }, // responsive font size
          
        }}
      >
        {item.name}
      </Typography>
              </NavLink>
            ))}
          </Box>

          {/* Right Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
              <IconButton color="inherit" onClick={toggleTheme}>
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>

            {/* Hamburger menu for mobile */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none',  }, }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 220 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((item) => (
              <ListItem button key={item.name} component={NavLink} to={item.path}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
