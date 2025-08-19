import React from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
        color: "#fff",
        py: 6,
        px: { xs: 3, sm: 6, md: 10 },
      }}
    >
      <Grid container spacing={4}>
        {/* Column 1: Logo & Tagline */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Fastrack Bus
          </Typography>
          <Typography variant="body2">
            India's most trusted and reliable bus service. Travel fast, travel safe.
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
            <Link href="/" underline="hover" color="inherit">Home</Link>
            <Link href="/about" underline="hover" color="inherit">About Us</Link>
            <Link href="/contact" underline="hover" color="inherit">Contact</Link>
            <Link href="/fares" underline="hover" color="inherit">Fares</Link>
          </Box>
        </Grid>

        {/* Column 3: Social Media */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#fff" }}>
              <FaFacebookF />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#fff" }}>
              <FaInstagram />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "#fff" }}>
              <FaTwitter />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "#fff" }}>
              <FaLinkedinIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Text */}
      <Box textAlign="center" mt={5} fontSize="14px" opacity={0.8}>
        © {new Date().getFullYear()} Fastrack Bus Service. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
