import React from 'react';

const Toppers = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)', borderColor: 'var(--border-light)', marginBottom: '10px' }}>
            🎉 Congratulations to All X Grade Toppers!
          </div>
          <span className="section-tag" style={{ display: 'block' }}>BOARD RESULTS 2024-25</span>
          <h2 className="section-title">Academic Excellence - X Grade Toppers</h2>
          <p className="section-subtitle">We are incredibly proud of our students who have achieved outstanding results in the 10th Grade Board Examinations.</p>
        </div>
        <div className="toppers-grid">
          <div className="topper-card top-performer">
            <div className="topper-badge"><i className="fa-solid fa-trophy"></i> TOP PERFORMER</div>
            <div className="rank-badge">#1</div>
            <img src="/assets/images/student_girl.png" alt="Alice Prasad" className="topper-img" />
            <h3 className="topper-name">Alice Prasad</h3>
            <div className="topper-score">98.3%</div>
            <div className="topper-label">X Grade Topper</div>
            <div className="topper-bar"></div>
          </div>
          <div className="topper-card">
            <div className="rank-badge">#2</div>
            <img src="/assets/images/student_boy.png" alt="Student" className="topper-img" />
            <h3 className="topper-name">Rahul Kumar</h3>
            <div className="topper-score">97.5%</div>
            <div className="topper-label">X Grade Topper</div>
            <div className="topper-bar" style={{ width: '80%', margin: '15px auto 0' }}></div>
          </div>
          <div className="topper-card">
            <div className="rank-badge">#3</div>
            <img src="/assets/images/student_girl.png" alt="Student" className="topper-img" />
            <h3 className="topper-name">Priya Singh</h3>
            <div className="topper-score">96.8%</div>
            <div className="topper-label">X Grade Topper</div>
            <div className="topper-bar" style={{ width: '80%', margin: '15px auto 0' }}></div>
          </div>
          <div className="topper-card">
            <div className="rank-badge">#4</div>
            <img src="/assets/images/student_boy.png" alt="Student" className="topper-img" />
            <h3 className="topper-name">Amit Patel</h3>
            <div className="topper-score">96.2%</div>
            <div className="topper-label">X Grade Topper</div>
            <div className="topper-bar" style={{ width: '80%', margin: '15px auto 0' }}></div>
          </div>
          <div className="topper-card">
            <div className="rank-badge">#5</div>
            <img src="/assets/images/student_girl.png" alt="Student" className="topper-img" />
            <h3 className="topper-name">Akshaya</h3>
            <div className="topper-score">93.5%</div>
            <div className="topper-label">X Grade Topper</div>
            <div className="topper-bar" style={{ width: '80%', margin: '15px auto 0' }}></div>
          </div>
          <div className="topper-card">
            <div className="rank-badge">#6</div>
            <img src="/assets/images/student_boy.png" alt="Student" className="topper-img" />
            <h3 className="topper-name">Anay Deepak</h3>
            <div className="topper-score">93.5%</div>
            <div className="topper-label">X Grade Topper</div>
            <div className="topper-bar" style={{ width: '80%', margin: '15px auto 0' }}></div>
          </div>
          <div className="topper-card">
            <div className="rank-badge">#7</div>
            <img src="/assets/images/student_girl.png" alt="Student" className="topper-img" />
            <h3 className="topper-name">Rida Meher</h3>
            <div className="topper-score">93.3%</div>
            <div className="topper-label">X Grade Topper</div>
            <div className="topper-bar" style={{ width: '80%', margin: '15px auto 0' }}></div>
          </div>
          <div className="topper-card">
            <div className="rank-badge">#8</div>
            <img src="/assets/images/student_girl.png" alt="Student" className="topper-img" />
            <h3 className="topper-name">S Sahasra</h3>
            <div className="topper-score">93.2%</div>
            <div className="topper-label">X Grade Topper</div>
            <div className="topper-bar" style={{ width: '80%', margin: '15px auto 0' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toppers;
