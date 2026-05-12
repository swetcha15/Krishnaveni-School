import React from 'react';

const Features = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">WHY CHOOSE US</span>
          <h2 className="section-title">Building Tomorrow's Leaders</h2>
          <p className="section-subtitle">A comprehensive educational experience designed to nurture every dimension of a student's potential.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-book-open"></i></div>
            <h3>Academic Excellence</h3>
            <p>Rigorous curriculum with proven results and top-scoring students year after year.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-chalkboard-user"></i></div>
            <h3>Expert Faculty</h3>
            <p>Highly qualified and dedicated teachers committed to each student's growth.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-trophy"></i></div>
            <h3>Award Winning</h3>
            <p>Recognized nationally for academic and extracurricular achievements.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-microchip"></i></div>
            <h3>Future-Ready Programs</h3>
            <p>Cutting-edge Robotics, AI, and STEM programs preparing students for tomorrow.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-palette"></i></div>
            <h3>Holistic Development</h3>
            <p>Balanced focus on arts, sports, and cultural activities alongside academics.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-shield-halved"></i></div>
            <h3>Safe Environment</h3>
            <p>Secure, nurturing campus with modern facilities and dedicated care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
