import React from 'react'
import './Explore.css'

function Explore() {
    return (
        <div className='explore-container'>
            <div className="card">
                <div className="card-bg"></div>
                <div className="card-content">
                    <span className="discover-title">Discover new possibilties</span>
                    <span className="para">We believe everyone should have access to open & powerful financial tools.</span>
                    <button>Explore App</button>
                </div>
                <div className="explore-coins-div">
                    <img className='explore-coin1' src='/Images/Icons/ethGoldCoin1.svg'></img>
                    <img className='explore-coin2' src='/Images/Icons/ethGoldCoin2.svg'></img>
                </div>
            </div>
        </div>
    )
}

export default Explore