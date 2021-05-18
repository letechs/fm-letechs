import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import HeroSection from './HeroSection';
import HomeCard from './HomeCard';
import './Home.css'
import Cards from './Cards';
import HCourse from '../Services/HCourse';

function Home() {
  return (
    <>
      <HeroSection/>
      <div className=" container-fluid home-btn p-4">
        <button className="btn btn-outline-primary mb-3">Account Opening</button>
        <button className="btn btn-outline-danger mb-3">Investor Account</button>
        <button className="btn btn-outline-success mb-3">Performance History</button>
      </div>
      <HCourse/>
      <Cards/>
      <HomeCard/>
      <Footer/>
    </>
  );
}

export default Home;
