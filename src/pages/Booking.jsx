// pages/Booking.jsx
import React from "react";
import { Box, Typography, Container, useTheme,   } from "@mui/material";
import BookingVideo from "../components/BookingVideo";
import BusSearch from "../components/BusSearch";

const Booking = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
   
  

  return (
    <>
      <BookingVideo />

      {/* Next Section */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          bgcolor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="md">
          {/* Gradient Heading */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background: "linear-gradient(90deg, #ff6a00, #e9aa35ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Book Your Bus Now
          </Typography>

          {/* Subtext (theme adaptive) */}
          <Typography
            variant="h6"
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? "#e0e0e0" // light gray in dark mode
                  : "#444444", // dark gray in light mode
            }}
          >
            Fast, reliable, and affordable bus booking at your fingertips.
          </Typography>
        </Container>
      </Box>
<BusSearch/>

           

    </>
  );
};

export default Booking;
