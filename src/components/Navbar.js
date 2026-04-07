import React from 'react';

/**
 * Navbar Component - Displays the header with app title
 * Simple, clean navigation bar for the application
 */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">
          <span className="title-icon">✅</span>
          Task Management App
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
