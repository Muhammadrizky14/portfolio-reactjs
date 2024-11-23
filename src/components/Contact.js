import React, { useState } from 'react';
import { Send } from 'react-feather';
import ScrollAnimation from './ScrollAnimation';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show notification
    setNotification('Message sent successfully!');
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <ScrollAnimation>
          <h2>Contact Me</h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="subtitle">Get in touch</p>
        </ScrollAnimation>

        <ScrollAnimation>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </ScrollAnimation>

        {notification && (
          <div className="notification animate-notification">
            {notification}
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
