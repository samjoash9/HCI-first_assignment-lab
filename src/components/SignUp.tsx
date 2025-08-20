import { Link } from "react-router-dom";

// reuse css sa tanan auth pages
import "../styles/AuthPages.css";

export function SignUp() {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Sign Up Page</h1>
                <Link to="/login" className="back-button">
                    Back to Login
                </Link>
            </div>
        </div>
    );
}
