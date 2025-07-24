import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Air Quality Monitoring System",
      description: "An Air Quality Monitoring System designed to measure and assess the concentration of various air pollutants in the environment, providing real-time data on air quality in specific locations.",
      image: "img1.webp",
      tags: ["IoT", "Environmental", "Real-time Data"]
    },
    {
      title: "MovieSearch - Movie Search Application",
      description: "A sleek React application that integrates with the OMDb API to fetch real-time movie data. Features responsive UI and smooth browsing experience across devices.",
      image: "imgg1.webp",
      tags: ["React", "API Integration", "Responsive"]
    },
    {
      title: "Memory Management Simulator",
      description: "An educational tool demonstrating memory management concepts in operating systems, helping students understand process memory allocation and deallocation algorithms.",
      image: "imgg.png",
      tags: ["Operating Systems", "Educational", "Simulation"]
    },
    {
      title: "Healthcare Chatbot",
      description: "An AI-powered chatbot using NLP and machine learning to provide healthcare assistance, answer medical queries, and guide users to appropriate healthcare services.",
      image: "img.webp",
      tags: ["AI", "NLP", "Healthcare"]
    },
    {
      title: "Election Sentiment Analysis",
      description: "A comprehensive system analyzing public sentiment regarding political candidates and elections using data from social media, news articles, and online content.",
      image: "img2.jpg",
      tags: ["Data Analysis", "Social Media", "Politics"]
    }
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className={`projects-title ${isVisible ? 'visible' : ''}`}>
          <h2>MY PROJECTS</h2>
          <p>Showcasing my development journey</p>
        </div>

        {/* Featured Project Carousel */}
        <div className={`featured-project ${isVisible ? 'visible' : ''}`}>
          <div className="project-carousel">
            <div className="project-card">
              <img
                src={currentProjectData.image}
                alt={currentProjectData.title}
                className="project-image"
              />
              <div className="project-content">
                <div className="featured-badge">
                  Featured Project
                </div>
                <h3 className="project-title">
                  {currentProjectData.title}
                </h3>
                <p className="project-description">
                  {currentProjectData.description}
                </p>
                <div className="project-tags">
                  {currentProjectData.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  <button className="btn-primary">
                    <ExternalLink size={18} />
                    View Project
                  </button>
                  <button className="btn-secondary">
                    <Github size={18} />
                    Code
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button onClick={prevProject} className="carousel-nav prev">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextProject} className="carousel-nav next">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Project indicators */}
          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`indicator ${index === currentProject ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-grid-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <div className="project-grid-image">
                <img src={project.image} alt={project.title} />
                <div className="project-number">
                  Project {index + 1}
                </div>
              </div>
              
              <div className="project-grid-content">
                <h3 className="project-grid-title">
                  {project.title}
                </h3>
                <p className="project-grid-description">
                  {project.description}
                </p>
                <div className="project-grid-tags">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="project-grid-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn-full">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;