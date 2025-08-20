import React from 'react'
import {
    ArrowDownIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
} from 'lucide-react'
import '../styles/HeroSection.css';

export function HeroSection() {
    return (
        <section id="home" className="hero-section">
            {/* Background gradient */}
            <div className="hero-bg"></div>
            <div className="container hero-content">
                <div className="hero-intro">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-title">John Doe</h1>
                    <h2 className="hero-subtitle">Full Stack Developer</h2>
                    <p className="hero-description">
                        I create engaging digital experiences with clean code and creative
                        problem-solving. Specialized in React, Node.js, and modern web
                        technologies.
                    </p>
                    <div className="button-container">
                        <a href="#contact" className="primary-button">
                            Get in touch
                        </a>
                        <a href="#about" className="secondary-button">
                            View my work
                        </a>
                    </div>
                    <div className="social-links">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <GithubIcon size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <LinkedinIcon size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <TwitterIcon size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <a href="#about">
                    <ArrowDownIcon size={24} />
                </a>
            </div>
        </section>
    )
}
