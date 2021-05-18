import React from 'react';
import '../../../App.css';
import { Button } from '../../Button';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btn'>
        <button className='btn btn-lg btn-outline-light '>
          GET STARTED
        </button>
        <button
          className='btn btn-lg btn-light'  onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
