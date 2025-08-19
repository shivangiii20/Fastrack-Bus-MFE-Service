import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  useTheme,
} from "@mui/material";
import Lottie from "lottie-react";
import { FaRupeeSign, FaBus, FaRoad } from "react-icons/fa";
import homeanimation from "../animations/homeanimation.json";
import dayjs from "dayjs";
import {
  FaBusAlt,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaClock,
  FaWallet,
  FaShieldAlt,
  FaStar,
  FaUserFriends,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const departureCities = ["Delhi", "Mumbai", "Chandigarh", "Surat"];
const arrivalCities = ["Bangalore", "Chennai", "Hyderabad", "Kolkata"];
const timings = ["Morning", "Afternoon", "Evening", "Night"];

const Home = () => {
  const theme = useTheme();
  const today = dayjs().format("YYYY-MM-DD");
  const maxDate = dayjs().add(3, "month").format("YYYY-MM-DD");

  const [departure, setDeparture] = useState("Delhi");
  const [arrival, setArrival] = useState("Bangalore");

  const handleSearch = () => {
    if (departure === arrival) {
      alert("Departure and Arrival cities must be different.");

      return;
    }
    console.log({ departure, arrival });
  };

  const routesData = [
    {
      image: "/images/delhitojaipur.jpeg",
      route: "Delhi → Jaipur",
      duration: "5 hrs",
      fare: "₹399",
      type: "AC Sleeper",
      link: "/routes/delhi-jaipur",
    },
    {
      image: "/images/mumbaitopune.jpeg",
      route: "Mumbai → Pune",
      duration: "3 hrs",
      fare: "₹299",
      type: "Non AC Seater",
      link: "/routes/mumbai-pune",
    },
    {
      image: "/images/bangtochennai.jpeg",
      route: "Bangalore → Chennai",
      duration: "6 hrs",
      fare: "₹499",
      type: "AC Sleeper",
      link: "/routes/bangalore-chennai",
    },
    {
      image: "/images/hydtovizag.jpeg",
      route: "Hyderabad → Vizag",
      duration: "9 hrs",
      fare: "₹699",
      type: "AC Sleeper",
      link: "/routes/hyderabad-vizag",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url(/images/busbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          px: 2,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-end" },
              textAlign: { xs: "center", md: "left" },
              gap: 4,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                maxWidth: 500,
                width: "100%",
              }}
            >
              <Lottie animationData={homeanimation} loop={true} />
            </Box>
          </Box>
        </Container>
      </Box>
      <br />

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Box
          sx={{
            py: 8,
            px: 2,
            backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              sx={{
                mb: 4,
                background: "linear-gradient(to right, #eb9030ff, #eeb899ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Search & Book Your Bus Now
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "space-between",
              }}
            >
              {/* Departure */}
              <TextField
                select
                fullWidth
                label="Departure"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                variant="outlined"
                sx={{
                  flexBasis: { xs: "100%", sm: "48%", md: "24%" },
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#1e1e1e" : "#f0f0f0",
                  borderRadius: 1,
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                    py: { xs: 1.2, md: 2 },
                  },
                }}
              >
                {departureCities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>

              {/* Arrival */}
              <TextField
                select
                fullWidth
                label="Arrival"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                variant="outlined"
                sx={{
                  flexBasis: { xs: "100%", sm: "48%", md: "24%" },
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#1e1e1e" : "#f0f0f0",
                  borderRadius: 1,
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                    py: { xs: 1.2, md: 2 },
                  },
                }}
              >
                {arrivalCities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>

              {/* Date */}
              <TextField
                fullWidth
                label="Date"
                type="date"
                defaultValue={today}
                inputProps={{ min: today, max: maxDate }}
                InputLabelProps={{ shrink: true }}
                sx={{
                  flexBasis: { xs: "100%", sm: "48%", md: "24%" },
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#1e1e1e" : "#f0f0f0",
                  borderRadius: 1,
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                    py: { xs: 1.2, md: 2 },
                  },
                }}
              />

              {/* Time */}
              <TextField
                select
                fullWidth
                label="Time"
                defaultValue="Morning"
                variant="outlined"
                sx={{
                  flexBasis: { xs: "100%", sm: "48%", md: "24%" },
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#1e1e1e" : "#f0f0f0",
                  borderRadius: 1,
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                    py: { xs: 1.2, md: 2 },
                  },
                }}
              >
                {timings.map((slot) => (
                  <MenuItem key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                ))}
              </TextField>

              {/* Search Button */}
              <Button
                fullWidth
                size="large"
                onClick={handleSearch}
                sx={{
                  flexBasis: "100%",
                  mt: 2,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
                  color: "#fff",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background:
                      "linear-gradient(to right, #fcaa25ff, #ec6009ff)",
                    transform: "scale(1.02)",
                  },
                }}
              >
                Search
              </Button>
            </Box>
          </Container>
        </Box>
      </motion.div>
      <br />
      <br />
      <br />

      {/* Feature Cards Section */}
      <Box
        sx={{
          pt: 8,
          pb: 6,
          px: 2,
          backgroundColor:
            theme.palette.mode === "dark" ? "#060606ff" : "#ffffff",
          transition: "background-color 0.3s easeOut",
        }}
      >
        {/* Section Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{
            mb: 4,
            background: "linear-gradient(to right, #e94d0bff, #eeb899ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Why Choose Fastrack Bus?
        </Typography>

        {/* Feature Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {[
            { icon: <FaBusAlt size={30} />, title: "Modern Buses" },
            { icon: <FaMapMarkedAlt size={30} />, title: "Live Tracking" },
            { icon: <FaMobileAlt size={30} />, title: "Easy Booking" },
            { icon: <FaClock size={30} />, title: "On-Time Departure" },
            { icon: <FaWallet size={30} />, title: "Affordable Fares" },
            { icon: <FaShieldAlt size={30} />, title: "Safe & Secure" },
            { icon: <FaStar size={30} />, title: "Top Rated Service" },
            { icon: <FaUserFriends size={30} />, title: "24/7 Support" },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ width: "100%" }}
            >
              <Box
                sx={{
                  background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
                  color: "#fff",
                  borderRadius: 3,
                  textAlign: "center",
                  px: 3,
                  py: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    background:
                      "linear-gradient(to right, #fcaa25ff, #ed7b34ff)",
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    p: 2,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {card.title}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      <br />
      <br />
      <br />

      {/* Routes Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Box
          sx={{
            pt: 8,
            pb: 6,
            px: 2,
            backgroundColor:
              theme.palette.mode === "dark" ? "#0b0b0b" : "#fafafa",
            transition: "background-color 0.3s easeOut",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{
              mb: 5,
              background: "linear-gradient(to right, #eb9030ff, #eeb899ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Popular Bus Routes
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr 1fr",
              },
              gap: 4,
            }}
          >
            {routesData.map((route, index) => (
              <Link
                key={index}
                to={route.link}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    background:
                      "linear-gradient(to right, #e9731fff, #e6c454ff)",
                    color: "#fff",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      background:
                        "linear-gradient(to right, #fcaa25ff, #ed7b34ff) ",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={route.image}
                    alt={route.route}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                      {route.route}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        fontSize: 14,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <FaClock />
                        {route.duration}
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <FaRupeeSign />
                        {route.fare}
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <FaBus />
                        {route.type}
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <FaRoad />
                        Fast & Comfortable
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Home;
