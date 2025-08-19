import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  Grid,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import successIcon from "@mui/icons-material/CheckCircle"; // success icon
import signupanimation from "../animations/signupanimation.json"; // your downloaded Lottie file path

function Signup() {
  const theme = useTheme();

  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  // validations
  const handleNameChange = (e) => {
    const regex = /^[A-Za-z ]*$/; // alphabets + space only
    if (regex.test(e.target.value)) setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // ✅ allow ANY type of password now
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !emailRegex.test(email) || !password) {
      alert("Please enter valid details");
      return;
    }

    // success snackbar
    setSuccess(true);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0c0c0cff, #0c0c0cff, #0a0a0aff)"
            : "linear-gradient(135deg, #ffffffff, #ffffffff)",
        p: 2,
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Animation */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 400, mx: "auto" }}>
            <Lottie animationData={signupanimation} loop={true} />
          </Box>
        </Grid>

        {/* Right Signup Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            sx={{
              maxWidth: { xs: 400, lg: 600 }, // normal on small, bigger on large
              width: "100%",
              p: { xs: 4, lg: 6 },  // extra padding on large screens
              borderRadius: 3,
              bgcolor: theme.palette.background.paper,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: "bold",
                textAlign: "center",
                background: "linear-gradient(to right, #eb9030ff, #eeb899ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Say Goodbye to Waiting, Hello to Fastrack!
            </Typography>
           

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
                sx={{ mb: 2 }}
                required
              />

              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                sx={{ mb: 2 }}
                required
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                sx={{ mb: 3 }}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: 2,
                  background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
                  "&:hover": {
                    background: "linear-gradient(to right, #fcaa25ff, #ec6009ff)",
                  },
                }}
              >
                Sign Up
              </Button>
            </form>

            <Typography
              variant="body2"
              sx={{ mt: 2, textAlign: "center", opacity: 0.8 }}
            >
              Already have an account?{" "}
              <span
                style={{
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Log in
              </span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          icon={<successIcon />}
          onClose={() => setSuccess(false)}
          sx={{ fontWeight: "bold" }}
        >
          Account Created Successfully! 🎉
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Signup;
