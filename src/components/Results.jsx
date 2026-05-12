import React from 'react';

const Results = () => {
  return (
    <section id="academics">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ACADEMIC EXCELLENCE</span>
          <h2 className="section-title">Results That Speak Volumes</h2>
          <p className="section-subtitle">Our students consistently achieve outstanding results, setting benchmarks in academic performance.</p>
        </div>
        <div className="results-grid">
          <div className="result-card">
            <div className="icon-box"><i className="fa-solid fa-arrow-trend-up"></i></div>
            <h3>100%</h3>
            <p>Pass Rate (10th)</p>
          </div>
          <div className="result-card">
            <div className="icon-box"><i className="fa-solid fa-medal"></i></div>
            <h3>98%</h3>
            <p>Distinction Rate</p>
          </div>
          <div className="result-card">
            <div className="icon-box"><i className="fa-solid fa-user-group"></i></div>
            <h3>500+</h3>
            <p>Students Placed</p>
          </div>
          <div className="result-card">
            <div className="icon-box"><i className="fa-solid fa-bullseye"></i></div>
            <h3>10+</h3>
            <p>State Toppers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
