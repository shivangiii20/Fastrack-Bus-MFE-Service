// pages/Login.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loginanimation from "../animations/loginanimation.json"; // ✅ use your bus animation JSON

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !password) {
      alert("Please enter valid details");
      return;
    }

    alert("✅ Login successful! Welcome back to Fastrack Bus Service 🚌");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}   // fade & slide in
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={4}
        sx={{ width: "90%", maxWidth: "1200px" }}
      >
        {/* Left Side - Login Card */}
        <Paper
          elevation={6}
          sx={{
        p: { xs: 4, lg: 6 },  // extra padding on large screens
            borderRadius: "20px",
            flex: 1,
            maxWidth: { xs: 400, lg: 600 }, // normal on small, bigger on large
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              textAlign: "center",
              background:  "linear-gradient(to right, #eb9030ff, #eeb899ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome Back!
          </Typography>
          <Typography variant="body1" textAlign="center" mb={3}>
            Log in and continue your journey with Fastrack Bus Service 🚍
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: "12px",
                background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
                "&:hover": { background: "linear-gradient(to right, #fcaa25ff, #ec6009ff)" },
              }}
            >
              Login
            </Button>
          </form>
        </Paper>

        {/* Right Side - Animation */}
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" maxWidth="500px">
          <Lottie animationData={loginanimation} loop={true} style={{ width: "100%", maxWidth: "400px" }} />
        </Box>
      </Box>
    </motion.div>
  );
};

export default Login;
