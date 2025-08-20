import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import '../styles/HomePage.css';

export function HomePage() {

    return (
        <div className='home-container'>
            <Header />
            <main>
                <HeroSection />
            </main>
        </div>
    );
}