import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import HeroSection from './Components/HeroSection/HeroSection';
import LiquidityInfoSection from './Components/LiquidityInfoSection/LiquidityInfoSection';
import MultipleAMMs from './Components/MultipleAMMs/MultipleAMMs';
import Explore from './Components/Explore/Explore';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection/>
      <LiquidityInfoSection/>
      <MultipleAMMs/>
      <Explore/>
    </div>
  );
}

export default App;
