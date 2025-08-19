import React from "react";
import { Box, useTheme } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from './pages/About';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  const theme = useTheme(); // detect light or dark mode

  return (
    <>
      
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#000000" : "#ffffff",
            minHeight: "100vh",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          </Routes>

          <Footer />
        </Box>
      
    </>
  );
}

export default App;
