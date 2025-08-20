// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { Footer } from './Footer';
import '../styles/HomePage.css';

export function HomePage() {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear any stored authentication data
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('rememberMe');
        // Redirect to login
        navigate('/login');
    };

    return (
        <>
            <div className='home-container'>
                <Header />
                <main>
                    <HeroSection />
                    <AboutSection />
                </main>
                <Footer />

                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>

            </div>
        </>
    );
}