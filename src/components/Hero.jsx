import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="badge">
          <span className="badge-dot"></span>
          Admissions Open 2025-26
        </div>
        <h1 className="hero-title">One Website.<br /><span className="highlight">Complete School</span><br />Experience.</h1>
        <p className="hero-subtitle">Empowering young minds with academic excellence, future-ready programs, and holistic development.</p>
        <div className="hero-actions">
          <button className="btn btn-primary">Start Your Journey <i className="fa-solid fa-arrow-right"></i></button>
          <button className="btn btn-outline"><i className="fa-solid fa-play"></i> Explore Campus</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>25+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Pass Rate</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
