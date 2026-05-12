import React from 'react';

const Curriculum = () => {
  return (
    <section id="curriculum">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">OUR CURRICULUM</span>
          <h2 className="section-title">Programs Designed for Excellence</h2>
          <p className="section-subtitle">A comprehensive, future-ready academic framework that nurtures every dimension of a student's potential.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-shield"></i></div>
            <h3>Complete Academic Responsibility of Child</h3>
            <p>We take full ownership of each student's academic journey — from syllabus completion to exam readiness, ensuring no child is left behind.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-map"></i></div>
            <h3>Common Academic Plan</h3>
            <p>A unified, structured academic roadmap across all classes ensures consistency, fairness, and measurable progress for every student.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-regular fa-clock"></i></div>
            <h3>Guided Study Hour System</h3>
            <p>Dedicated supervised study hours with teacher guidance help students build strong study habits and reinforce daily learning.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-atom"></i></div>
            <h3>Integrated IIT-JEE / NEET Foundation Program</h3>
            <p>Early-stage foundation preparation aligned with competitive entrance exams, blending board curriculum with advanced problem-solving.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-regular fa-comments"></i></div>
            <h3>Communicative English</h3>
            <p>Focused spoken and written English sessions build fluency, confidence, and real-world communication skills from an early stage.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-regular fa-lightbulb"></i></div>
            <h3>Activity Based Teaching</h3>
            <p>Hands-on, experiential learning through experiments, projects, group activities, and creative tasks to deepen conceptual understanding.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-dumbbell"></i></div>
            <h3>Sports, Yoga and Meditation</h3>
            <p>A holistic wellness curriculum integrating physical fitness, mindfulness, and emotional resilience alongside academic excellence.</p>
          </div>
          <div className="feature-card">
            <div className="icon-box"><i className="fa-solid fa-wifi"></i></div>
            <h3>Future Proof Online Learning</h3>
            <p>Digital-first supplemental learning resources, recorded sessions, and interactive tools that keep students ahead in the digital age.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
