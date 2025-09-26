import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Shreya Mandekar. All rights reserved.</p>
            <p className="footer-heart">
              Made with <FaHeart className="heart-icon" /> using MERN Stack
            </p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/ShreyaMandekar" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="#" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;