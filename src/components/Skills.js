import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';
import ScrollAnimation from './ScrollAnimation';

function Skills() {
  const [expandedSection, setExpandedSection] = useState(null);

  const frontendSkills = [
    { name: 'HTML', level: 'Mahir', icon: '/images/logo/html-1.svg' },
    { name: 'CSS', level: 'Menengah', icon: '/images/logo/css-3.svg' },
    { name: 'Javascript', level: 'Menengah', icon: '/images/logo/logo-javascript.svg' },
    { name: 'Bootstrap', level: 'Mahir', icon: '/images/logo/bootstrap-5-1.svg' },
    { name: 'React', level: 'Menengah', icon: '/images/logo/react-2.svg' },
  ];

  const backendSkills = [
    { name: 'PHP', level: 'Mahir', icon: '/images/logo/php-1.svg' },
    { name: 'Codeigniter', level: 'Menengah', icon: '/images/logo/codeigniter.svg' },
    { name: 'Laravel', level: 'Mahir', icon: '/images/logo/laravel-2.svg' },
    { name: 'Mysql', level: 'Mahir', icon: '/images/logo/mysql-3.svg' },
    { name: 'NodeJS', level: 'Menengah', icon: '/images/logo/nodejs-1.svg' },
    { name: 'Git', level: 'Mahir', icon: '/images/logo/git-icon.svg' },
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <ScrollAnimation>
          <h2>Keahlian</h2>
          <p className="subtitle">Keahlian Teknikal Saya</p>
        </ScrollAnimation>

        <div className="skills-grid">
          <ScrollAnimation>
            <div className="skill-section">
              <button 
                className={`skill-header ${expandedSection === 'frontend' ? 'expanded' : ''}`}
                onClick={() => toggleSection('frontend')}
              >
                <div className="skill-header-content">
                  <span className="skill-icon">{ "{}" }</span>
                  <h3>Front-end Developer</h3>
                </div>
                <ChevronDown className="arrow-icon" />
              </button>
              
              <div className={`skill-content ${expandedSection === 'frontend' ? 'expanded' : ''}`}>
                <div className="skill-cards">
                  {frontendSkills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                      <img src={skill.icon} alt={skill.name} className="skill-logo" />
                      <h4>{skill.name}</h4>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="skill-section">
              <button 
                className={`skill-header ${expandedSection === 'backend' ? 'expanded' : ''}`}
                onClick={() => toggleSection('backend')}
              >
                <div className="skill-header-content">
                  <span className="skill-icon">⚙️</span>
                  <h3>Back-end Developer</h3>
                </div>
                <ChevronDown className="arrow-icon" />
              </button>
              
              <div className={`skill-content ${expandedSection === 'backend' ? 'expanded' : ''}`}>
                <div className="skill-cards">
                  {backendSkills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                      <img src={skill.icon} alt={skill.name} className="skill-logo" />
                      <h4>{skill.name}</h4>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default Skills;

