import React, { useState, useEffect } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: 'HTML', level: 90, className: 'html' },
    { name: 'CSS', level: 85, className: 'css' },
    { name: 'JavaScript', level: 80, className: 'javascript' },
    { name: 'React', level: 75, className: 'react' },
    { name: 'MySQL', level: 70, className: 'mysql' },
    { name: 'Python', level: 65, className: 'python' },
    { name: 'C++', level: 60, className: 'cpp' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      {/* Wave dividers */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fda4af"></path>
        </svg>
      </div>

      <div className="container">
        <div className="skills-content">
          <div className={`section-title ${isVisible ? 'visible' : ''}`}>
            <h2>SKILLS</h2>
            <p>Technologies I work with</p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-card ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="skill-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                
                <div className="skill-bar">
                  <div
                    className={`skill-progress ${skill.className} ${
                      hoveredSkill === skill.name ? 'animate' : ''
                    }`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 300}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Skills Tags */}
          <div className={`skills-tags ${isVisible ? 'visible' : ''}`}>
            {skills.map((skill) => (
              <button
                key={skill.name}
                className={`skill-tag ${skill.className}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="wave-divider bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#fda4af" fillOpacity="0.25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#fda4af" fillOpacity="0.5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#fda4af"></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;