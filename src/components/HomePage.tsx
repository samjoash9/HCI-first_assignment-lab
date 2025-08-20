import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import '../styles/HomePage.css';

// mao ni ang holder sa duha ka major sections which is ang header og HeroSection
// wala nako gi butang sa lain folder gi isa nalang nako ang pages og components sa isa ka folder (components)
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