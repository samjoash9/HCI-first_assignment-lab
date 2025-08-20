import React from "react";
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
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}
