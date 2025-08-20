import React, { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import '../styles/Header.css';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <span>Portfolio</span>
                    <span className="logo-accent">.</span>
                </div>
                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    {['Home', 'About'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                            {item}
                        </a>
                    ))}
                </nav>
                {/* Mobile Navigation Toggle */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>
            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="container">
                        <nav className="mobile-nav">
                            {['Home', 'About'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
