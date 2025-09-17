import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import '../assets/main.css';

const HomePage = () => {
  const slides = [
    { src: '/vite.svg', alt: 'PlanetPoint brand' },
    { src: '/ham.svg', alt: 'Sustainable actions icon' },
    { src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop', alt: 'Forest conservation' },
    { src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop', alt: 'Ocean sustainability' }
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 2000);
    return () => clearInterval(id);
  }, [slides.length]);

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

        <section className="carousel-section" aria-label="Highlights">
          <div className="image-carousel">
            {slides.map((s, i) => (
              <figure key={i} className={`slide${i === current ? ' active' : ''}`}>
                <img className="slide-image" src={s.src} alt={s.alt} />
              </figure>
            ))}
          </div>
        </section>

        <section className="education-section" id="learn">
          <div className="section-header">
            <h2>Learn by Doing</h2>
            <p>Explore SDGs with bite-sized lessons, interactive quizzes, and real‑world eco-actions like tree planting, clean‑ups, and waste segregation.</p>
          </div>
          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-icon">🎯</div>
              <h3>Quizzes that Stick</h3>
              <p>Short, adaptive quizzes reinforce concepts around water, waste, energy, biodiversity, and climate.</p>
            </div>
            <div className="edu-card">
              <div className="edu-icon">🌳</div>
              <h3>Hands-on Actions</h3>
              <p>Complete eco-missions like planting trees, water audits, and e‑waste drives to earn points and badges.</p>
            </div>
            <div className="edu-card">
              <div className="edu-icon">📊</div>
              <h3>Track and Celebrate</h3>
              <p>Level up with badges and leaderboards that reward consistent impact and knowledge growth.</p>
            </div>
          </div>
        </section>

        <section className="graphics-section" aria-label="Graphics">
          <div className="graphics-grid">
            <div className="graphic-card">
              <div className="graphic-emoji">💧</div>
              <h4>Water Conservation</h4>
              <p>Measure daily usage and reduce wastage with simple habits and school campaigns.</p>
            </div>
            <div className="graphic-card">
              <div className="graphic-emoji">♻️</div>
              <h4>Waste Segregation</h4>
              <p>Master wet/dry segregation and run e‑waste collection drives with your class.</p>
            </div>
            <div className="graphic-card">
              <div className="graphic-emoji">🌞</div>
              <h4>Clean Energy</h4>
              <p>Promote energy efficiency and renewables through audits and awareness projects.</p>
            </div>
            <div className="graphic-card">
              <div className="graphic-emoji">🌿</div>
              <h4>Biodiversity</h4>
              <p>Create mini green belts and nurture native species around your campus.</p>
            </div>
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
          <p><Link to="/contact">Go to Contact Page →</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
