import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Vartika Chaudhary</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul>
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollToSection(item)}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`nav-mobile ${isMenuOpen ? 'open' : 'closed'}`}>
          <nav>
            <ul>
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollToSection(item)}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;