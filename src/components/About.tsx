import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      {/* Animated background elements */}
      <div className="about-bg-element top-right"></div>
      <div className="about-bg-element bottom-left"></div>

      <div className="container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div>
            <img
              src="img.jpg"
              alt="Vartika Chaudhary"
              className="profile-image"
            />
          </div>
          
          <div>
            <h2 className="about-title">
              Hello! I'm Vartika Chaudhary
            </h2>
            <p className="about-description">
              I'm currently pursuing B.Tech from Graphic Era University (6<sup>th</sup> semester), 
              and I have a strong passion for web development. I specialize in front-end technologies 
              such as HTML, CSS, JavaScript, and React, working on building responsive, user-friendly 
              websites and applications that make a difference.
            </p>
            
            <div className="about-tags">
              <div className="about-tag">
                🎓 B.Tech Student
              </div>
              <div className="about-tag">
                💻 Web Developer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default About;