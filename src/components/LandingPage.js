import React from 'react';
import './LandingPage.css';
import { EnvelopeIcon, FunnelIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome</h1>
        <p>This is a portfolio</p>
        <p>of works by</p>
        <h2>James Daniel Whitford</h2>
        <div className="email-container">
          <button className="mail-button">
            <EnvelopeIcon className="icon" />
          </button>
          <span>james.whitford0@gmail.com</span>
        </div>
        <br></br><br></br>
        <p className="scroll-to-see-works-of">Scroll to see works of:</p>
        <div className="filter-container">
          <button className="filter-button">
            <FunnelIcon className="icon" />
          </button>
          <span>Philosophy, Ceramics, Gardens, Software Design</span>
        </div>
        <button className="down-arrow">
          <ChevronDownIcon className="icon" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;