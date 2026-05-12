import React from 'react';

const FuturePrograms = () => {
  return (
    <section id="programs" className="dark-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FUTURE PROGRAMS</span>
          <h2 className="section-title dark">Preparing for Tomorrow</h2>
          <p className="section-subtitle">Cutting-edge technology programs that give our students a head start in the AI-driven future.</p>
        </div>
        <div className="two-col-layout">
          <div className="main-image-card">
            <img src="/assets/images/robotics_lab.png" alt="Robotics Lab" />
          </div>
          <div className="cards-grid">
            <div className="small-card">
              <div className="icon-box"><i className="fa-solid fa-microchip"></i></div>
              <h4>Robotics Lab</h4>
              <p>State-of-the-art lab where students design, build, and program robots with sensors.</p>
            </div>
            <div className="small-card">
              <div className="icon-box"><i className="fa-solid fa-brain"></i></div>
              <h4>AI & Machine Learning</h4>
              <p>Introduction to artificial intelligence concepts and practical projects.</p>
            </div>
            <div className="small-card">
              <div className="icon-box"><i className="fa-solid fa-microscope"></i></div>
              <h4>STEM Projects</h4>
              <p>Cross-disciplinary projects integrating science, technology, engineering, and mathematics.</p>
            </div>
            <div className="small-card">
              <div className="icon-box"><i className="fa-solid fa-wifi"></i></div>
              <h4>IoT & Smart Systems</h4>
              <p>Students learn to create connected devices using Internet of Things technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePrograms;
