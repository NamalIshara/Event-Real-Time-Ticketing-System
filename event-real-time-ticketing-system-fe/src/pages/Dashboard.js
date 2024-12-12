import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextField, Typography} from "@mui/material";

import TicketPoolInitializer from "../pages/Initializer"

const DashboardPage = () => {
  const [ticketCount, setTicketCount] = useState(0); // For adding and buying tickets
  const [availableTickets, setAvailableTickets] = useState(0);
  const [ticketStatus, setTicketStatus] = useState(""); // To show available tickets

  useEffect(() => {
    fetchTicketStatus();
  }, []);

  // Fetch available tickets status
  const fetchTicketStatus = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/ticket/getTicket");
      setAvailableTickets(response.data.availableTickets); // Assuming response returns available tickets
      setTicketStatus(response.data.status); // Available/Purchased status
    } catch (error) {
      console.error("Error fetching ticket status", error);
    }
  };

  // Add tickets function
  const addTickets = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/v1/ticketPool/addTicket", { count: ticketCount });
      if (response.data === "success") {
        alert("Tickets added successfully!");
        fetchTicketStatus(); // Refresh ticket status after adding
      } else {
        alert("Error adding tickets!");
      }
    } catch (error) {
      console.error("Error adding tickets", error);
      alert("Error adding tickets!");
    }
  };

  // Buy tickets function
  const buyTickets = async () => {
    if (ticketCount <= 0 || ticketCount > availableTickets) {
      alert("Invalid number of tickets to buy.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/ticketPool/removeTickets", { count: ticketCount });
      if (response.data === "success") {
        alert("Tickets purchased successfully!");
        fetchTicketStatus(); // Refresh ticket status after purchase
      } else {
        alert("Error buying tickets!");
      }
    } catch (error) {
      console.error("Error buying tickets", error);
      alert("Error buying tickets!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome To Dashboard
      </Typography>

<div><TicketPoolInitializer/></div>
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h6">Available Tickets: {availableTickets}</Typography>
        <Typography variant="body1">Ticket Status: {ticketStatus}</Typography>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h6">Add Tickets</Typography>
        <TextField
          label="Number of Tickets"
          type="number"
          value={ticketCount}
          onChange={(e) => setTicketCount(Number(e.target.value))}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTickets}
          style={{ marginTop: "10px" }}
        >
          Add Tickets
        </Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h6">Buy Tickets</Typography>
        <TextField
          label="Number of Tickets"
          type="number"
          value={ticketCount}
          onChange={(e) => setTicketCount(Number(e.target.value))}
          fullWidth
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={buyTickets}
          style={{ marginTop: "10px" }}
        >
          Buy Tickets
        </Button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Typography variant="h5">Ticket Information</Typography>
        <div>
          <Typography variant="body1">Total Available Tickets: {availableTickets}</Typography>
          <Typography variant="body1">Ticket Status: {ticketStatus}</Typography>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
