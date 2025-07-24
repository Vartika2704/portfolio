import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className={`contact-title ${isVisible ? 'visible' : ''}`}>
          <h2>CONTACT ME</h2>
          <p>Let's work together on something amazing</p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
            <div className="contact-card">
              <h3>Get in Touch</h3>
              <p>
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or just have a chat about web development. Feel free to reach out!
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Email</h4>
                    <p>vartika.chaudhary146@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Phone</h4>
                    <p>+91 </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Location</h4>
                    <p>Dehradun, Uttarakhand, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h4>Follow Me</h4>
                <div className="social-links">
                  <a href="#" className="social-link facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-link instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-link twitter">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`contact-form-container ${isVisible ? 'visible' : ''}`}>
            <div className="contact-card">
              <h3>Send Message</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="form-input form-textarea"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;