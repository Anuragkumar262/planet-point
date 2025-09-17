import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import '../assets/main.css';

const HomePage = () => {
  return (
    <div className="home-container">

      <main className="main-content">
        <section className="hero-section">
          <h1>
            <span className="logo-text">PlanetPoint</span>
          </h1>
          <div className="quote-animation">
            <TypeAnimation
              sequence={[
                'Educating for sustainable development and environmental stewardship.',
                1200,
                'Learn, act, and protect our planet through hands-on projects.',
                1200,
                'SDGs awareness begins with curious minds.',
                1200,
                'Small actions today, a greener tomorrow.',
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="hero-cta">
            <Link to="/login" className="btn btn--primary">Get Started</Link>
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>About PlanetPoint</h2>
          <p>
            PlanetPoint is a gamified environmental education platform that helps learners explore, understand,
            and act on the United Nations Sustainable Development Goals (SDGs). Through quizzes, challenges,
            and community engagement, we make complex topics approachable and actionable.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>What are the SDGs?</h3>
              <p>
                The SDGs are 17 global goals adopted by the UN to end poverty, protect the planet, and ensure
                prosperity for all. They cover themes like clean water (SDG 6), sustainable cities (SDG 11),
                responsible consumption (SDG 12), climate action (SDG 13), and more.
              </p>
            </div>
            <div className="feature-card">
              <h3>Why Environmental Education?</h3>
              <p>
                Environmental education builds awareness, critical thinking, and problem‑solving skills. It empowers
                students to understand ecosystems, waste management, biodiversity, and climate change—and to take
                meaningful actions in their communities.
              </p>
            </div>
            <div className="feature-card">
              <h3>How PlanetPoint Helps</h3>
              <p>
                We blend theory with practice: short lessons and explanatory content introduce key concepts, while
                interactive quizzes and real‑world challenges turn knowledge into habit. Learners earn points, track
                progress, and share their impact.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <h4>Contact Us</h4>
          <p>Email: hello@planetpoint.app</p>
          <p>Phone: +91 1234567890</p>
          <p>Address: 221B Green Street, Eco City</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
