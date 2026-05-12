import React from 'react';

const Videos = () => {
  return (
    <section>
      <div className="container">
        <div className="video-grid">
          <div className="video-card">
            <div className="video-thumbnail">
              <img src="/assets/images/cultural_dance.png" alt="Thumbnail" />
              <div className="play-btn"><i className="fa-brands fa-youtube"></i></div>
            </div>
            <div className="video-content">
              <div className="video-category">EVENTS</div>
              <h4>Annual Day Celebrations 2024</h4>
            </div>
          </div>
          <div className="video-card">
            <div className="video-thumbnail">
              <img src="/assets/images/holding_trophy.png" alt="Thumbnail" />
              <div className="play-btn"><i className="fa-brands fa-youtube"></i></div>
            </div>
            <div className="video-content">
              <div className="video-category">PERFORMANCES</div>
              <h4>Student Performances & Talent Show</h4>
            </div>
          </div>
          <div className="video-card">
            <div className="video-thumbnail">
              <img src="/assets/images/robotics_lab.png" alt="Thumbnail" />
              <div className="play-btn"><i className="fa-brands fa-youtube"></i></div>
            </div>
            <div className="video-content">
              <div className="video-category">EDUCATION</div>
              <h4>Robotics Workshop Highlights</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
