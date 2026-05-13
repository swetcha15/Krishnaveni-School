import React, { useState, useEffect, useRef } from 'react';

const CountUpAnimation = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const Hero = ({ onOpenModal }) => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="badge">
          <span className="badge-dot"></span>
          Admissions Open 2025-26
        </div>
        <h1 className="hero-title">One Website.<br /><span className="highlight">Complete School</span><br />Experience.</h1>
        <p className="hero-subtitle">Empowering young minds with academic excellence, future-ready programs, and holistic development.</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onOpenModal}>Start Your Journey <i className="fa-solid fa-arrow-right"></i></button>
          <button className="btn btn-outline"><i className="fa-solid fa-play"></i> Explore Campus</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3><CountUpAnimation end={25} duration={2000} />+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-item">
            <h3><CountUpAnimation end={5000} duration={2500} />+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="stat-item">
            <h3><CountUpAnimation end={100} duration={2000} />%</h3>
            <p>Pass Rate</p>
          </div>
          <div className="stat-item">
            <h3><CountUpAnimation end={50} duration={2000} />+</h3>
            <p>Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
