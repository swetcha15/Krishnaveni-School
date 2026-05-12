import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container nav-container">
        <div className="logo-area">
          <div className="logo-icon"><i className="fa-solid fa-graduation-cap"></i></div>
          <div className="logo-text">
            <span className="logo-title">Krishnaveni</span>
            <span className="logo-subtitle">Talent Schools</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#academics">Academics</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#achievements">Achievements</a>
          <a href="#activities">Activities</a>
          <a href="#programs">Programs</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn btn-primary">Apply Now</button>
      </div>
    </header>
  );
};

export default Header;
