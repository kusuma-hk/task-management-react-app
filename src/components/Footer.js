import React from 'react';

/**
 * Footer Component - Displays footer information
 * Simple footer with copyright and additional information
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Task Management App. All rights reserved.</p>
        <p className="footer-description">
          A simple and responsive task management application built with React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
