import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';

import './index.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">As long as you have a Cell Phone you're Never Alone.</h1>
          <img
            src="logo1.png"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
          I think the only reason you visit an Apple Mart is,because you wonder what life is like on another planet.
          </p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="shop1.gif"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  );
};

export default Home;