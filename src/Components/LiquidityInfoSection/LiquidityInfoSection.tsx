import React from 'react'
import './LiquidityInfoSection.css'

function LiquidityInfoSection() {
    return (
        <div className='section-container'>
            <div className='view-container'>
                <div className="details-container">
                    <span className='header-text'>Liquidity Provisioning</span>
                    <span className='title'>Earn by Providing<br />Liquidity</span>
                    <span className='title-mobile'>Earn by Providing Liquidity</span>
                    <span className='para1'>Earn a higher yield by providing liquidity through GammaSwap. Think of our wrapped pools like wrapped tokens.</span>
                    <span className='para2'>The GammaSwap protocol will directly deposit liquidity into the underlying AMM and provide an LP token to the depositor representing the position.</span>
                    <button>Learn More</button>
                </div>
                <div className="coins-div">
                    <img className='coin1' src='/Images/Icons/ethGoldCoin1.svg'></img>
                    <img className='coin2' src='/Images/Icons/ethGoldCoin2.svg'></img>
                </div>
            </div>

        </div>
    )
}

export default LiquidityInfoSection