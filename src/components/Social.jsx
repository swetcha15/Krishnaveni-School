import React from 'react';

const Social = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">STAY CONNECTED</span>
          <h2 className="section-title">Follow Our Journey</h2>
          <p className="section-subtitle">Stay updated with the latest news, events, and student achievements on our social channels.</p>
        </div>
        <div className="social-grid">
          <div className="social-card">
            <div className="social-icon icon-ig"><i className="fa-brands fa-instagram"></i></div>
            <h4>Instagram</h4>
            <p className="social-handle">@krishnavenitalent</p>
            <p className="social-stats">12.4K followers</p>
          </div>
          <div className="social-card">
            <div className="social-icon icon-fb"><i className="fa-brands fa-facebook-f"></i></div>
            <h4>Facebook</h4>
            <p className="social-handle">Krishnaveni Talent</p>
            <p className="social-stats">8.2K likes</p>
          </div>
          <div className="social-card">
            <div className="social-icon icon-yt"><i className="fa-brands fa-youtube"></i></div>
            <h4>YouTube</h4>
            <p className="social-handle">KrishnaveniSchools</p>
            <p className="social-stats">3.5K subscribers</p>
          </div>
          <div className="social-card">
            <div className="social-icon icon-x"><i className="fa-brands fa-x-twitter"></i></div>
            <h4>Twitter / X</h4>
            <p className="social-handle">@krishnaveni_schools</p>
            <p className="social-stats">2.1K followers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
