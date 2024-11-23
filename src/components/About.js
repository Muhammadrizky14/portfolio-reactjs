import React from 'react';
import { FileText } from 'react-feather';
import ScrollAnimation from './ScrollAnimation';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <ScrollAnimation delay={200}>
          <div className="about-image-container">
            <img
              src="/images/about.jpg"
              alt="Profile"
              className="about-image"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <div className="about-content">
            <h2>About <span className="highlight">Me</span></h2>
            <h3>Full-stack Developer|</h3>
            <p>
              Saya seorang Pengembang Frontend yang berpengalaman dalam membangun situs web dan
              aplikasi yang modern dan responsif. Saya ahli dalam HTML, CSS, JavaScript, dan kerangka
              kerja seperti React dan Next.js.
            </p>
            <p>
              My work focuses on delivering high-quality, accessible designs that meet user needs while
              maintaining clean, efficient code.
            </p>
            <a href="/cv.pdf" download className="download-button">
              <FileText size={20} />
              Download CV
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default About;

