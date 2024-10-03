import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/">HOME</a>
          <a href="/">ASK FREE QUESTION</a>
          <a href="/">CONSULT ONLINE</a>
          <a href="/">CLINICAL VISIT</a>
        </div>
        <div className="navbar-right">
          <a href="/">Register as a doctor</a>
          <a href="/">Login/Sign-up</a>
        </div>
      </nav>
      <header className="hero">
        <div className="hero-content">
          <h1>Empowering Recovery: Where Patients Meet Physiatrists</h1>
          <p>
            It gets much better from here. Get 1:1 help that works, and lasts — from the best in online therapy and psychiatry.
          </p>
          <div className="search-box">
            <select>
              <option>I would like to...</option>
              <option>Consult a Doctor</option>
              <option>Ask a Question</option>
              <option>Schedule a Visit</option>
            </select>
            <button>GO</button>
          </div>
        </div>
      </header>
      <footer className="features">
        <div className="feature">
          <img src="/path/to/verified-doctors-icon.png" alt="Verified Doctors" />
          <p>Verified Doctors</p>
        </div>
        <div className="feature">
          <img src="/path/to/care-guarantee-icon.png" alt="100% Care Guaranteed" />
          <p>100% Care Guaranteed</p>
        </div>
        <div className="feature">
          <img src="/path/to/support-icon.png" alt="24/7 Help Support" />
          <p>24/7 Help Support</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
