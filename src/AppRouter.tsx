import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { HomePage } from "./components/HomePage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { SignUp } from "./components/SignUp";
import { ForgotPassword } from "./components/ForgotPassword";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route : mag show sa LoginForm (if slash lang) */}
        <Route path="/" element={<LoginForm />} />

        {/* kani if defined ang slash tapos login */}
        <Route path="/login" element={<LoginForm />} />

        {/* Signup page route */}
        <Route path="/signup" element={<SignUp />} />

        {/* Forgot password page route */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Home page kay accessible ra siya if authenticated */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* fallback action if unkown ang route */}
        <Route path="*" element={<LoginForm />} />

      </Routes>
    </BrowserRouter>
  );
}
