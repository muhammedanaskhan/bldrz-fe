import React from 'react'
import './Perpetuals.css'

function Perpetuals() {
  return (
    <div className='perpetuals-container'>
        <div className="images-container">
            <img className='rocket' src='/Images/rocket.png'></img>
            <img className='dollar' src='/Images/USdollar.png'></img>
            <img className='pot' src='/Images/pot.png'></img>
            <img className='perpetual-ellipse' src='/Images/perpetuals-ellipse.png'></img>
            <img className='perpetual-ellipse-mobile' src='/Images/perpetuals-ellipse-mobile.png'></img>
        
        </div>
        <div className="details">
            <span className='perpetuals-header'>Perpetuals</span>
            <span className='long-volatality'>Long Volatility</span>
            <span className="perpetuals-para1">Turn Impermanent Loss into Impermanent Gain. Get perpetaul volatility exposure on any asset in the form of a long, short or straddle. Unlike perpetual futures, liquidations are time dependent - protecting traders from unexpected price movements. </span>
            <span className="perpetuals-para2">GammaSwap perpetuals are fully collateralized offering non-linear returns that increase as price changes.</span>
            <button>Learn More</button>
        </div>
    </div>
  )
}

export default Perpetuals