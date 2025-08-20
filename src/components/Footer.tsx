import React from 'react'
import {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    InstagramIcon,
} from 'lucide-react'
import '../styles/Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo-container">
                    <div className="footer-logo">
                        <span>Portfolio</span>
                        <span className="logo-accent">.</span>
                    </div>
                    <p className="footer-tagline">
                        Building digital experiences with passion.
                    </p>
                </div>
                <div className="footer-social-links">
                    <a href="#" className="social-link">
                        <GithubIcon size={20} />
                    </a>
                    <a href="#" className="social-link">
                        <LinkedinIcon size={20} />
                    </a>
                    <a href="#" className="social-link">
                        <TwitterIcon size={20} />
                    </a>
                    <a href="#" className="social-link">
                        <InstagramIcon size={20} />
                    </a>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="container footer-bottom">
                <div className="footer-copyright">
                    © {currentYear} John Doe. All rights reserved.
                </div>
                <div className="footer-links">
                    <a href="#" className="footer-link">
                        Privacy Policy
                    </a>
                    <a href="#" className="footer-link">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    )
}
