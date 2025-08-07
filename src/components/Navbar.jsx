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

const Navbar = () => {
  const theme = useTheme();
  const { toggleTheme, mode } = useThemeMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerItems = ['Home', 'About', 'Booking']; // Add your pages here

  return (
    <>
      <AppBar position="static"  sx={{
    background: theme.palette.mode === 'dark'
      ? '#121212' // or '#000' or 'theme.palette.background.default'
      : 'linear-gradient(to right, #e9731fff, #e6c454ff)', // your light gradient
    color: '#fff',
    boxShadow: 'none',
  }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Brand Title */}
          <Typography variant="h6" fontWeight="bold">
            FastrackBus
          </Typography>

          {/* Right Side: Menu Icon on small screen, Toggle on all */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Dark mode toggle */}
            <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
              <IconButton color="inherit" onClick={toggleTheme}>
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>

            {/* Hamburger icon (visible on small screens) */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {drawerItems.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
