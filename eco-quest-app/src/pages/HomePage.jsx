import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import '../assets/main.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar starts here */}
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            {/* यहाँ आपके लोगो के लिए इमेज टैग है */}
            <img 
              src="/PlanetPoint__Logo.png" 
              alt="PlanetPoint Logo" 
              className="logo-img" 
            />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/login" className="nav-item">Login</Link>
          </li>
        </ul>
      </nav>
      {/* Navbar ends here */}

      <main className="main-content">
        <section className="hero-section">
          <h1>
            <span className="logo-text">PlanetPoint</span>
          </h1>
          <div className="quote-animation">
            <TypeAnimation
              sequence={[
                'Exploring the cosmos, one point at a time...',
                1000,
                'Join us on an interstellar journey.',
                1000,
                'Discover the wonders of the universe.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>About PlanetPoint</h2>
          <p>
            PlanetPoint is your ultimate guide to the stars. Our platform is designed to make astronomy accessible and exciting for everyone, from curious beginners to seasoned stargazers. We provide detailed, interactive maps of the night sky, real-time data on planetary movements, and a vast library of celestial information.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Interactive Sky Maps</h3>
              <p>Explore constellations, planets, and galaxies in real-time. Zoom in to discover fascinating details about each celestial body.</p>
            </div>
            <div className="feature-card">
              <h3>Live Data Feeds</h3>
              <p>Track the current position of planets, moon phases, and upcoming astronomical events. Never miss a meteor shower again!</p>
            </div>
            <div className="feature-card">
              <h3>Stellar Library</h3>
              <p>Dive into our extensive collection of articles, stunning images, and videos about the universe. Learn about black holes, nebulas, and more.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Create your free account today and start your adventure through the cosmos.</p>
          <a href="/login" className="cta-button">Join PlanetPoint</a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <h4>Contact Us</h4>
          <p>Email: contact@planetpoint.com</p>
          <p>Phone: +91 1234567890</p>
          <div className="social-links">
            {/* Add your social media icons here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;