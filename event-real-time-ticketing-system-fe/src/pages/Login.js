import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Reset error before attempting login
        try {
            const response = await axios.post("http://localhost:8080/api/v1/user/login", {
                email,
                password,
            });
            localStorage.setItem("token", response.data.token); // Store the token
            navigate("/dashboard");
        } catch (err) {
            // Check if the error response exists and has a message
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message); // Display server-provided error
            } else {
                setError("An unexpected error occurred. Please try again."); // Generic fallback
            }
        }
    };

    const handleRegisterClick = () => {
        navigate("/signup"); // Navigate to the signup page when "Register" is clicked
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && (
                    <Alert severity="error" sx={{ marginBottom: 2 }}>
                        {error}
                    </Alert>
                )}
                <div className="input-field">
               
                    <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                     <label>Enter the Email</label>
                </div>
                <div className="input-field">
                
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Enter your password</label>
                </div>
                <div className="forget">
                    <label for="remember">
                        <input type="checkbox" id="remember" />
                        <p>Remember me</p>
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Log In</button>
                <div className="register">
                    <p>Don't have an account? <a href="#" onClick={handleRegisterClick}>Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
