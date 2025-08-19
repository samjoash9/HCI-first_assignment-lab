import React from 'react';
import { LoginForm } from './components/LoginForm';
import './styles/App.css';

export function App() {
  return (
    <div className="app-container">
      {/* i render ang Login i form */}
      <LoginForm />
    </div>
  );
}