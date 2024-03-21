import React from 'react'
import './MultipleAMMs.css'

function MultipleAMMs() {
    return (
        <div className='container'>
            <div className="details-container">
                <span className='header-text'>Multiple AMMs</span>
                <span className='title'>Earn by Providing<br />Liquidity</span>
                <span className='title-mobile'>Earn by Providing Liquidity</span>
                <span className='para1'>Earn a higher yield by providing liquidity through GammaSwap. Think of our wrapped pools like wrapped tokens.</span>
                <span className='para2'>The GammaSwap protocol will directly deposit liquidity into the underlying AMM and provide an LP token to the depositor representing the position.</span>
                <button>Learn More</button>
            </div>

            <div className="chart-container">
                <img className='diagram' src='/Images/AMM-diagram.png'></img>
            </div>
        </div>
    )
}

export default MultipleAMMs