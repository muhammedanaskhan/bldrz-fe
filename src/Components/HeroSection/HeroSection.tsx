import React from 'react'
import './HeroSection.css'
function HeroSection() {

    const availableCoinsInfo = [
        {
            coinName: 'ETH',
            coinIcon: '/Images/Icons/eth.svg',
            coinValue: '0.434',
            coinBalance: '2.473844736 ETH',
        },
        {
            coinName: 'USDC',
            coinIcon: '/Images/Icons/usdc.svg',
            coinValue: '656.13',
            coinBalance: '2234.12 USDC',
        }
    ]
    return (
        <div className='hero-section'>
            <div className="intro-card">
                <span className='intro-card-heading'>Oracle Free Perpetual Volatility Trading</span>
                <span className="intro-card-subheading">
                    A novel primitive for scaling DeFi liquidity through permissionless risk markets
                </span>
                <div className="intro-card-buttons">
                    <button className='launch-app-btn'>
                        Launch App
                    </button>
                    <button className='learn-more-btn'>
                        Learn More
                    </button>
                </div>
            </div>



            <div className="add-liquidity-section">
                <div className="gain-tags-container">
                    <div className="gain-tag">
                        <img src='/Images/Icons/star.svg'></img>
                        <span>3.3%</span>
                    </div>
                    <div className="gain-tag">
                        <img src='/Images/Icons/star.svg'></img>
                        <span>4.8%</span>
                    </div>
                </div>
                <div className="add-liquidity-card">
                    <div className='add-liquidity-header'>
                        <span>Add Liquidity</span>
                        <img src='/Images/Icons/info-outline.svg'></img>
                    </div>

                    <div className="tab-btns-container">
                        <div className="deposit-btn">
                            <span className="">
                                Deposit
                            </span>
                            <img src='/Images/Icons/down-round.svg'></img>
                        </div>
                        <div className="withdraw-btn">
                            <span className="">
                                Withdraw
                            </span>
                            <img src='/Images/Icons/up-round.svg'></img>
                        </div>
                    </div>

                    <div className="provide-collateral-div">
                        <span className="">
                            Provide Collateral
                        </span>

                        <div className="coins-container">

                            {availableCoinsInfo.map((coinInfo) => (
                                <div className="coin-detail-container">
                                    <div className="coin-row-card">
                                        <div className="coin-label">
                                            <img src={coinInfo.coinIcon} alt="" />
                                            <span>{coinInfo.coinName}</span>
                                        </div>

                                        <span className='coin-value'>{coinInfo.coinValue}</span>
                                    </div>
                                    <div className="available-balance-row">
                                        <span>Available balance</span>
                                        <span>{coinInfo.coinBalance}</span>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="provide-liquidity-btn">
                        <span>Provide Liquidity</span>
                    </div>

                </div>
            </div>

            <img className='ellipse' src='/Images/ellipse.png'></img>
        </div>
    )
}

export default HeroSection