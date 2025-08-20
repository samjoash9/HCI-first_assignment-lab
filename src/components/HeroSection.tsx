import React from 'react'
import {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
} from 'lucide-react'
import '../styles/HeroSection.css';

export function HeroSection() {
    return (
        <section id="home" className="hero-section">
            {/* Background gradient */}
            <div className="hero-bg">
                <div className="container hero-content">
                    <div className="hero-intro">
                        <p className="hero-greeting">Hello, I'm</p>
                        <h1 className="hero-title">Joash Antonio</h1>
                        <h2 className="hero-subtitle">Full Stack Developer</h2>
                        <p className="hero-description">
                            I create engaging digital experiences with clean code and creative
                            problem-solving. Specialized in React, Node.js, and modern web
                            technologies.
                        </p>
                        <div className="button-container">
                            <a href="https://www.facebook.com/juwas.tae" className="primary-button">
                                Get in touch
                            </a>
                            <a href="https://fir-hosting-6055e.firebaseapp.com/" className="secondary-button">
                                About Me
                            </a>
                        </div>

                        <div className="social-links">
                            <a
                                href="https://github.com/samjoash9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <GithubIcon size={25} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <LinkedinIcon size={25} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <TwitterIcon size={25} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
