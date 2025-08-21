import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Fade, Slide, Card, CardContent, Grid } from '@mui/material';
import Lottie from 'lottie-react';
import { motion } from "framer-motion";
import abouteam from '../animations/abouteam.json';
import { Flag, Visibility, Favorite } from '@mui/icons-material';
import { DirectionsBus, GpsFixed, SupportAgent, Payment, LocationCity, EmojiEmotions } from "@mui/icons-material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";




const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: 6,
        background: isDark
          ? 'linear-gradient(to right, #131414ff, #151617ff, #0c0d0dff)'
          : 'linear-gradient(to right, #eb8942ff, #e6c454ff)',
        transition: 'background 0.3s ease',
        gap: 4,
      }}
    >
      {/* Left Side Text */}
      <Slide direction="right" in timeout={700}>
        <Box flex={1} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              background: isDark
                ? 'linear-gradient(to right, #ed700aff, #f3ae60ff)'
                : 'white',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            About Fastract Team
          </Typography>

          <Typography
            variant="h6"
            color={isDark ? '#ccc' : '#ffffffff'}
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              maxWidth: '600px',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            We connect cities and hearts — with comfort, reliability, and unmatched affordability.
            Discover your journey with seamless booking and real-time tracking.
          </Typography>
        </Box>
      </Slide>

      {/* Right Side Animation */}
      <Fade in timeout={1000}>
        <Box
          flex={1}
          maxWidth={{ xs: 300, sm: 400, md: 450 }}
          mx="auto"
        >
          <Lottie animationData={abouteam} loop={true} />
        </Box>
      </Fade>
    </Box>


    {/* New Cards Section */}
<Box
  sx={{
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
    gap: 3,
    mt: 5,
  }}
>
  {[
    { icon: <Flag sx={{ fontSize: 40, color: "white" }} />, title: "Track Your Bus", desc: "Easily track your bus in real time and stay updated on arrival times." },
    { icon: <Visibility sx={{ fontSize: 40, color: "white" }} />, title: "Live Bus View", desc: "Get a live view of your bus location and current status instantly." },
    { icon: <Favorite sx={{ fontSize: 40, color: "white" }} />, title: "Favorite Routes", desc: "Save and quickly access your most-used routes with ease." },
  ].map((card, index) => (
    <Box
      key={index}
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      sx={{
        background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
        padding: "20px",
        borderRadius: "15px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        transition: "background 0.3s ease",
        "&:hover": {
          background: "linear-gradient(to right, #fcaa25ff, #ec6009ff)",
        },
      }}
    >
      {card.icon}
      <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
        {card.title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {card.desc}
      </Typography>
    </Box>
  ))}
</Box>


{/* === Why Choose Us (4 cards in a row) === */}
<Box sx={{ mt: 6 }}>
  <Typography
    variant="h4"
    align="center"
    sx={{
      fontWeight: "bold",
      mb: 4,
      background: "linear-gradient(90deg, #ff7e39, #ffb14b)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Why Choose Us
  </Typography>

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)", // 4 per row on desktop
      },
      gap: 3,
    }}
  >
    {[
      {
        icon: <DirectionsBus sx={{ fontSize: 48, color: "white" }} />,
        title: "Comfortable Buses",
        desc: "Clean, spacious, and well-maintained coaches for a smooth ride.",
      },
      {
        icon: <GpsFixed sx={{ fontSize: 48, color: "white" }} />,
        title: "Real-time GPS",
        desc: "Track your bus live and plan perfectly around arrivals.",
      },
      {
        icon: <SupportAgent sx={{ fontSize: 48, color: "white" }} />,
        title: "24/7 Support",
        desc: "Friendly help whenever you need it, day or night.",
      },
      {
        icon: <Payment sx={{ fontSize: 48, color: "white" }} />,
        title: "Secure Payments",
        desc: "Fast online booking with trusted payment options.",
      },
    ].map((card, index) => (
      <Box
        key={index}
        component={motion.div}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        sx={{
          background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
          p: 3,
          borderRadius: "16px",
          color: "white",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          transition: "background 0.3s ease",
          "&:hover": {
            background: "linear-gradient(to right, #fcaa25ff, #ec6009ff)",
          },
        }}
      >
        {card.icon}
        <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
          {card.title}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, opacity: 0.95 }}>
          {card.desc}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>



 {/*COUNT UP SECTION  */}
 {/* COUNT UP SECTION */}
<Box
  sx={{
    py: 8,
    px: 2,
    backgroundColor: (theme) =>
      theme.palette.mode === "dark" ? "#121212" : "#fff",
  }}
>
  {(() => {
    const { ref, inView } = useInView({
      triggerOnce: false, // allow retrigger on scroll up/down
      threshold: 0.3, // 30% visible before triggering
    });

    const stats = [
      {
        icon: <DirectionsBus sx={{ fontSize: 60, color: "white" }} />,
        value: 150,
        suffix: "+",
        label: "Daily Buses",
      },
      {
        icon: <LocationCity sx={{ fontSize: 60, color: "white" }} />,
        value: 80,
        suffix: "+",
        label: "Cities Connected",
      },
      {
        icon: <EmojiEmotions sx={{ fontSize: 60, color: "white" }} />,
        value: 100000,
        suffix: "+",
        label: "Happy Customers",
      },
    ];

    return (
      <Grid
        ref={ref}
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
                  color: "white",
                  borderRadius: 3,
                  p: 5,
                  textAlign: "center",
                  boxShadow: 4,
                }}
              >
                {stat.icon}
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ mt: 1 }}
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0" + stat.suffix
                  )}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    );
  })()}
</Box>








    
    </>
  );
};

export default About;
