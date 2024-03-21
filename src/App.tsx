import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import HeroSection from './Components/HeroSection/HeroSection';
import LiquidityInfoSection from './Components/LiquidityInfoSection/LiquidityInfoSection';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection/>
      <LiquidityInfoSection/>
    </div>
  );
}

export default App;
