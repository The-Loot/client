import React from 'react';
import '../../css/pages/homepage.scss';
import { Card, Button } from 'react-bootstrap';

export default function HomePage() {
  return (
    <div className="homepage">
      <img className="main-splash" src="/images/splash1.png" alt="splash" />
      <h3 className="about-header">About</h3>
      <hr className="page-line" />
      <div className="info-container">
        <img src="/images/josh-owner.jpg" alt="owner josh" />
        <p>
          The Loot Basketball is an amatuer league in the San Fernando Valley that was found by Josh Karalnick. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <section className="social-container">
        <h3 className="social-header">Follow Us On Social Media</h3>
        <hr className="page-line" />
        <div className="social-links">
          <div className="instagram">
            <img src="/images/icons8-instagram-128.png" alt="instagram" />
            <a href="https://www.instagram.com/thelootbasketball/?hl=en" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
          <div className="facebook">
            <img src="/images/icons8-facebook-128.png" alt="instagram" />
            <a href="https://www.facebook.com/TheLootBasketball/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
