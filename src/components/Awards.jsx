import React from 'react';

const Awards = () => {
  return (
    <section id="achievements" className="bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">AWARDS & RECOGNITION</span>
          <h2 className="section-title">Celebrating Excellence</h2>
          <p className="section-subtitle">A legacy of achievements that reflects our commitment to nurturing talent and academic brilliance.</p>
        </div>
        <div className="two-col-layout">
          <div className="main-image-card">
            <img src="/assets/images/holding_trophy.png" alt="Student holding trophy" />
            <div className="image-overlay-text">
              <div className="icon-text"><i className="fa-solid fa-trophy"></i> 50+ Awards</div>
              <h3>A Tradition of Winning</h3>
            </div>
          </div>
          <div className="cards-grid">
            <div className="small-card">
              <div className="icon-box"><i className="fa-solid fa-trophy"></i></div>
              <h4>2024 Best School Award</h4>
              <p>Recognized for outstanding academic performance and infrastructure.</p>
              <span className="meta-text">State Education Board</span>
            </div>
            <div className="small-card">
              <div className="icon-box"><i className="fa-solid fa-medal"></i></div>
              <h4>2024 National Science Olympiad</h4>
              <p>15 students qualified for national level with 3 gold medals.</p>
              <span className="meta-text">Science Foundation</span>
            </div>
            <div className="small-card">
              <div className="icon-box"><i className="fa-regular fa-star"></i></div>
              <h4>2023 Sports Excellence</h4>
              <p>District champions in athletics, cricket, and basketball.</p>
              <span className="meta-text">District Sports Authority</span>
            </div>
            <div className="small-card">
              <div className="icon-box"><i className="fa-solid fa-award"></i></div>
              <h4>2023 Innovation Award</h4>
              <p>Recognized for Robotics and AI learning programs integration.</p>
              <span className="meta-text">STEM India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
