import React from 'react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
  },
  section: {
    width: "100%",
    maxWidth: "600px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  formField: {
    marginBottom: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
  },
  ticketInfo: {
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "#e0f7fa",
    color: "#00796b",
    textAlign: "center",
  },
}));

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;