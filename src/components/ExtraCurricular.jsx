import React from 'react';

const ExtraCurricular = () => {
  return (
    <section id="activities">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">EXTRA-CURRICULAR</span>
          <h2 className="section-title">Beyond the Classroom</h2>
          <p className="section-subtitle">A vibrant ecosystem of activities that develop confidence, teamwork, and well-rounded personalities.</p>
        </div>
        <div className="activity-grid">
          <div className="activity-card">
            <img src="/assets/images/sports_field.png" alt="Sports" className="activity-img" />
            <div className="activity-content">
              <h3>Sports & Athletics</h3>
              <p>Cricket, basketball, athletics, football, and martial arts programs with professional coaching.</p>
              <div className="activity-tags">
                <span className="tag">Cricket</span>
                <span className="tag">Basketball</span>
                <span className="tag">Athletics</span>
              </div>
            </div>
          </div>
          <div className="activity-card">
            <img src="/assets/images/cultural_dance.png" alt="Cultural Events" className="activity-img" />
            <div className="activity-content">
              <h3>Cultural Events</h3>
              <p>Dance, music, drama, and traditional art forms celebrated through annual cultural festivals.</p>
              <div className="activity-tags">
                <span className="tag">Dance</span>
                <span className="tag">Music</span>
                <span className="tag">Drama</span>
              </div>
            </div>
          </div>
          <div className="activity-card">
            <img src="/assets/images/robotics_lab.png" alt="Science" className="activity-img" />
            <div className="activity-content">
              <h3>Science & Innovation</h3>
              <p>Science fairs, innovation challenges, and inter-school competitions fostering scientific temper.</p>
              <div className="activity-tags">
                <span className="tag">Science Fair</span>
                <span className="tag">Quiz</span>
                <span className="tag">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
