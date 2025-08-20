import React from 'react'
import { CodeIcon, PenToolIcon, UsersIcon } from 'lucide-react'
import '../styles/AboutSection.css';


export function AboutSection() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <div className="section-divider"></div>
                </div>
                <div className="about-grid">
                    <div className="about-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                            alt="Profile"
                            className="about-image"
                        />
                    </div>
                    <div className="about-content">
                        <h3>Who I Am</h3>
                        <p className="about-text">
                            I'm a passionate full-stack developer with over 5 years of
                            experience creating web applications that are both beautiful and
                            functional. My journey in technology started when I built my first
                            website at 15, and I've been hooked ever since.
                        </p>
                        <p className="about-text">
                            When I'm not coding, you can find me hiking in the mountains,
                            reading science fiction, or experimenting with new cooking
                            recipes. I believe that diverse experiences fuel creativity and
                            problem-solving in development.
                        </p>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <CodeIcon size={24} className="skill-icon" />
                                <h4 className="skill-title">Development</h4>
                                <p className="skill-description">
                                    Clean, efficient code solutions
                                </p>
                            </div>
                            <div className="skill-card">
                                <PenToolIcon size={24} className="skill-icon" />
                                <h4 className="skill-title">Design</h4>
                                <p className="skill-description">
                                    Intuitive, responsive interfaces
                                </p>
                            </div>
                            <div className="skill-card">
                                <UsersIcon size={24} className="skill-icon" />
                                <h4 className="skill-title">Collaboration</h4>
                                <p className="skill-description">Team-oriented approach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
