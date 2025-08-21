import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const departureCities = [
  "Kanpur",
  "Jaipur",
  "Ghaziabad",
  "Amroha",
  "Prayagraj",
  "Delhi",
];

const arrivalCities = [
  "Pune",
  "Haridwar",
  "Meerut",
  "Hyderabad",
  "Mirzapur",
  "Rohtak",
];

// ❌ routes that always show error
const unavailableRoutes = ["Kanpur-Pune", "Jaipur-Hyderabad", "Delhi-Mirzapur"];

// Dummy buses generator (unchanged logic)
const generateBuses = (departure, arrival) => {
  const count = Math.floor(Math.random() * 3) + 3; // 3–5
  return Array.from({ length: count }).map((_, idx) => ({
    id: idx + 1,
    name: `${departure} Travels ${idx + 1}`,
    departure,
    arrival,
    time: `${8 + idx}:00 AM`,
    price: `₹${400 + idx * 100}`,
    seats: Math.floor(Math.random() * 30) + 20, // 20–50
  }));
};

const BusSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [buses, setBuses] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setError("");
    setBuses([]);

    if (!departure || !arrival) {
      setError("Please select both departure and arrival cities.");
      return;
    }
    if (departure === arrival) {
      setError("Departure and Arrival cannot be the same city.");
      return;
    }

    const routeKey = `${departure}-${arrival}`;
    if (unavailableRoutes.includes(routeKey)) {
      setError("We are currently unavailable for this route.");
      return;
    }

    setBuses(generateBuses(departure, arrival));
  };

  return (
    <Box sx={{ py: { xs: 4, sm: 6 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            background: "linear-gradient(90deg,#ff6a00,#e9aa35ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Search Buses
        </Typography>

        {/* Inputs + Search */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            select
            label="Departure City"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                py: { xs: 1, sm: 1.5, md: 2 },
              },
            }}
          >
            {departureCities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Arrival City"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                py: { xs: 1, sm: 1.5, md: 2 },
              },
            }}
          >
            {arrivalCities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            onClick={handleSearch}
            fullWidth
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              py: { xs: 1.2, sm: 1.5, md: 2 },
              background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
              color: "#fff",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                background: "linear-gradient(to right, #fcaa25ff, #ec6009ff)",
                transform: "scale(1.02)",
              },
            }}
          >
            Search
          </Button>
        </Box>

        {/* Error */}
        {error && (
          <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
            {error}
          </Typography>
        )}

        {/* Table with horizontal scroll + bigger on large screens */}
        {buses.length > 0 && (
          <TableContainer
            component={Paper}
            sx={{
              mt: 4,
              borderRadius: 2,
              overflowX: "auto", // ✅ horizontal scroll enabled
            }}
          >
            <Table
              size="small"
              sx={{
                minWidth: { xs: "600px", sm: "800px", md: "1000px" }, // ✅ wider table on large screens
                "& th, & td": {
                  whiteSpace: "nowrap", // ✅ prevent squishing
                  fontSize: { xs: "12px", sm: "14px", md: "15px" },
                  p: { xs: 1, sm: 1.25, md: 1.5 },
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell><b>Bus Name</b></TableCell>
                  <TableCell><b>From</b></TableCell>
                  <TableCell><b>To</b></TableCell>
                  <TableCell><b>Time</b></TableCell>
                  <TableCell><b>Price</b></TableCell>
                  <TableCell><b>Seats</b></TableCell>
                  <TableCell align="center"><b>Action</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {buses.map((bus) => (
                  <TableRow key={bus.id}>
                    <TableCell>{bus.name}</TableCell>
                    <TableCell>{bus.departure}</TableCell>
                    <TableCell>{bus.arrival}</TableCell>
                    <TableCell>{bus.time}</TableCell>
                    <TableCell>{bus.price}</TableCell>
                    <TableCell>{bus.seats}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        sx={{
                          fontSize: { xs: "0.7rem", sm: "0.85rem", md: "0.95rem" },
                          px: { xs: 1.5, sm: 2.5, md: 3 },
                          py: { xs: 0.6, sm: 0.9, md: 1.1 },
                          background: "linear-gradient(to right, #e9731fff, #e6c454ff)",
                          color: "#fff",
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            background: "linear-gradient(to right, #fcaa25ff, #ec6009ff)",
                            transform: "scale(1.02)",
                          },
                        }}
                      >
                        Book Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Box>
  );
};

export default BusSearch;
