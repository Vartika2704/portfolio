import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Vartika Chaudhary | Made with 
            <Heart className="heart-icon" size={16} />
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;