import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, TextField, Box } from "@mui/material";

const TicketPoolInitializer = () => {
  const [totalTickets, setTotalTickets] = useState("");
  const [ticketsReleaseRate, setTicketsReleaseRate] = useState("");
  const [maxTicketsCapacity, setMaxTicketsCapacity] = useState("");
  const [message, setMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message on new submission

    const configurationData = {
      totalTickets: parseInt(totalTickets, 10),
      ticketsReleaseRate: parseInt(ticketsReleaseRate, 10),
      maxTicketsCapacity: parseInt(maxTicketsCapacity, 10),
    };

    try {
      const response = await axios.post("http://localhost:8080/api/v1/ticketPool/initialize", configurationData);
      if (response.status === 202) {
        setAlertSeverity("success");
        setMessage("Ticket Pool initialization successful");
      } else {
        setAlertSeverity("error");
        setMessage("Ticket Pool initialization failed");
      }
    } catch (error) {
      setAlertSeverity("error");
      setMessage(error.response?.data?.message || "An unexpected error occurred");
    }
  };

  return (
    <Box sx={{ padding: 3, maxWidth: 500, margin: "0 auto" }}>
      <h2>Initialize Ticket Pool</h2>
      {message && <Alert severity={alertSeverity} sx={{ marginBottom: 2 }}>{message}</Alert>}

      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Total Tickets"
            type="number"
            required
            value={totalTickets}
            onChange={(e) => setTotalTickets(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Tickets Release Rate"
            type="number"
            required
            value={ticketsReleaseRate}
            onChange={(e) => setTicketsReleaseRate(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Max Tickets Capacity"
            type="number"
            required
            value={maxTicketsCapacity}
            onChange={(e) => setMaxTicketsCapacity(e.target.value)}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Initialize
        </Button>
      </form>
    </Box>
  );
};

export default TicketPoolInitializer;
