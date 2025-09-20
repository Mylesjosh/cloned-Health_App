import React from 'react';
import MultiFoodParse from '../components/MultiFoodParse';

export default function Home() {
  return (
    <div className="home-landing">
      <div className="hook-banner">
        <i className="fa-solid fa-heart-pulse" style={{color:'#e53935', fontSize:'2rem', marginRight:12}}></i>
        <span className="hook-text">
          Track your Naija meals, stay healthy, live better!
        </span>
      </div>
      <div className="home-intro">
        <h2>Welcome to <span style={{color:'#1976d2'}}>NaijaCal</span></h2>
        <p>
          Effortlessly log, parse, and analyze your Nigerian food intake. Use the Parse tab to check your current meal, or try parsing multiple food combos below!
        </p>
      </div>
      <div className="multi-food-parse-container">
        <MultiFoodParse />
      </div>
    </div>
  );
}
