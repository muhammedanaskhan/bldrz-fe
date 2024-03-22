import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import HeroSection from './Components/HeroSection/HeroSection';
import LiquidityInfoSection from './Components/LiquidityInfoSection/LiquidityInfoSection';
import MultipleAMMs from './Components/MultipleAMMs/MultipleAMMs';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Perpetuals from './Components/Perpetuals/Perpetuals';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection/>
      <LiquidityInfoSection/>
      <Perpetuals/>
      <MultipleAMMs/>
      <Explore/>
      <Footer/>
    </div>
  );
}

export default App;
