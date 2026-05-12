import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">GALLERY</span>
          <h2 className="section-title">Life at Krishnaveni</h2>
          <p className="section-subtitle">Moments that capture the spirit of learning, growth, and celebration at our campus.</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="/assets/images/student_girl.png" alt="Gallery" /></div>
          <div className="gallery-item"><img src="/assets/images/robotics_lab.png" alt="Gallery" /></div>
          <div className="gallery-item"><img src="/assets/images/sports_field.png" alt="Gallery" /></div>
          <div className="gallery-item"><img src="/assets/images/student_boy.png" alt="Gallery" /></div>
          <div className="gallery-item"><img src="/assets/images/cultural_dance.png" alt="Gallery" /></div>
          <div className="gallery-item"><img src="/assets/images/hero_bg.png" alt="Gallery" /></div>
          <div className="gallery-item"><img src="/assets/images/holding_trophy.png" alt="Gallery" /></div>
          <div className="gallery-item"><img src="/assets/images/student_girl.png" alt="Gallery" /></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
