import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'react-feather';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Task List App',
      description: 'A modern task management application built with React',
      imageUrl: '/images/portfolio1.png',
      projectLink: 'https://github.com/Muhammadrizky14/todolist_responsi.git'
    },
    {
      id: 2,
      title: 'Accommodation Booking',
      description: 'An Airbnb-style booking platform with real-time availability',
      imageUrl: '/images/portfolio2.png',
      projectLink: 'https://github.com/Muhammadrizky14/Cloning-Airbnb.git'
    },
    {
      id: 3,
      title: 'Profile Design',
      description: 'Clean and modern user profile interface design',
      imageUrl: '/images/portfolio3.png',
      projectLink: 'https://github.com/Muhammadrizky14/profil-latihan.git'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Fully-featured online store with modern UI/UX',
      imageUrl: '/images/portfolio4.png',
      projectLink: 'https://github.com/Muhammadrizky14'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with interactive maps',
      imageUrl: '/images/portfolio5.png',
      projectLink: 'https://github.com/Muhammadrizky14'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics tool for social media management',
      imageUrl: '/images/portfolio6.png',
      projectLink: 'https://github.com/Muhammadrizky14'
    }
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p className="subtitle">Recent work I've done</p>
        <div className="carousel-container">
          <button className="scroll-button left" onClick={prevProject} aria-label="Previous project">
            <ChevronLeft size={24} />
          </button>
          <div className="project-carousel">
            <div className="project-card">
              <div className="project-image">
                <img src={projects[currentIndex].imageUrl} alt={projects[currentIndex].title} />
                <div className="project-overlay">
                  <a href={projects[currentIndex].projectLink} target="_blank" rel="noopener noreferrer" className="view-project">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{projects[currentIndex].title}</h3>
                <p>{projects[currentIndex].description}</p>
              </div>
            </div>
          </div>
          <button className="scroll-button right" onClick={nextProject} aria-label="Next project">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;

  