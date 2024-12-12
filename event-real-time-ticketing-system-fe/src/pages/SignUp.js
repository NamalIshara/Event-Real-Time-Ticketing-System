import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import '../styles/Login.css';

const SignUp = () => {
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState(""); // Added email field
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(""); // Added success state
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(""); // Reset error before attempting signup
        setSuccess(""); // Reset success message
        try {
            const response = await axios.post("http://localhost:8080/api/v1/user/sign_up", {
                name,
                email,
                password,
                role,
            });
            setSuccess("Signup successful! You can now log in.");
            setTimeout(() => navigate("/login"), 3000); // Redirect to login after a delay
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message); // Display server-provided error
            } else {
                setError("An unexpected error occurred. Please try again."); // Generic fallback
            }
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                {error && (
                    <Alert severity="error" sx={{ marginBottom: 2 }}>
                        {error}
                    </Alert>
                )}
                {success && (
                    <Alert severity="success" sx={{ marginBottom: 2 }}>
                        {success}
                    </Alert>
                )}
                <div className="input-field">
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Enter your username</label>
                </div>
                <div className="input-field">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Enter your email</label>
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <label>Enter your role</label>
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
                <button type="submit">Sign Up</button>
                <div className="login">
                    <p>Already have an account? <a href="#" onClick={() => navigate("/login")}>Log In</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
