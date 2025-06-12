import React, { useState, useEffect } from 'react';
import './SideNav.css';

function SideNav({ onSideNavToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (onSideNavToggle) {
      onSideNavToggle(newIsOpen);
    }
  };

  // Notify parent component of initial state
  useEffect(() => {
    if (onSideNavToggle) {
      onSideNavToggle(isOpen);
    }
  }, [onSideNavToggle, isOpen]);

  return (
    <div className={`side-nav ${isOpen ? 'open' : ''}`}>
      <button className="side-nav-toggle" onClick={toggleSideNav}>
        {isOpen ? '×' : '☰'}
      </button>
      <div className="side-nav-content">
        <h3>Lorem Ipsum</h3>
        <ul>
          <li><a href="#about">Lorem Ipsum</a></li>
          <li><a href="#features">Lorem Ipsum</a></li>
          <li><a href="#development">Lorem Ipsum</a></li>
          <li><a href="#screenshots">Lorem Ipsum</a></li>
          <li><a href="#characters">Lorem Ipsum</a></li>
          <li><a href="#world">Lorem Ipsum</a></li>
          <li><a href="#gameplay">Lorem Ipsum</a></li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;