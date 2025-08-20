import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthPages.css";

export function SignUp() {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Sign Up Page</h1>
                <Link to="/" className="back-button">⬅ Back to Login</Link>
            </div>
        </div>
    );
}
