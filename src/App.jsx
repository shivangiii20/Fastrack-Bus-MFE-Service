import React from 'react';
import { Box, useTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
function App() {
  const theme = useTheme(); // detect light or dark mode


  return (
    <>
    
  
      <Box
      sx={{
        backgroundColor:
          theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <Navbar />
      <Home />
      
      {/* Add more sections like About, Services, etc. */}
    </Box>
    
    </>
  )
}

export default App;
