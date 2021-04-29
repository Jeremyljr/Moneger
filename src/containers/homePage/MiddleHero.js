import React from 'react'
import './MiddleHero.css';

function MiddleHero() {
    return (
        <div className='hero2'>
            <div className='bgWrapper'></div>
            <div className='container'>
                <div className='keyFeatures'>
                    <h3>Key Features</h3>
                    <p>
                    Moneger makes it easy to split bills with friends and family. 
                    We organize all your shared expenses and IOUs in one place, 
                    so that everyone can see who they owe.
                    </p>
                </div>
                <div className='allFeatures'>
                    <div className='featureLists'>
                        <div className='features'>
                            <img className='featureLogo' src='https://spshurl.herokuapp.com/C0Aa4' alt='picture'/>
                            <div className='featureText'>
                                <h3 className='featureTitle'>Track Balances</h3>
                                <p className='featureCaption'> Keep track of shared expenses, balances, and who owes who.</p>
                            </div>
                        </div>
                        <div className='features'>
                            <img className='featureLogo' src='https://spshurl.herokuapp.com/C0Aa4' alt='picture'/>
                            <div className='featureText'>
                                <h3 className='featureTitle'>Organize Expenses</h3>
                                <p className='featureCaption'> Split expenses with any group: trips, housemates, friends, and family.</p>
                            </div>
                        </div>
                        <div className='features'>
                            <img className='featureLogo' src='https://spshurl.herokuapp.com/C0Aa4' alt='picture'/>
                            <div className='featureText'>
                                <h3 className='featureTitle'>Add Expenses Easily</h3>
                                <p className='featureCaption'> Quickly add expenses on the go before you forget who paid.</p>
                            </div>
                        </div>
                        <div className='features'>
                            <img className='featureLogo' src='https://spshurl.herokuapp.com/C0Aa4' alt='picture'/>
                            <div className='featureText'>
                                <h3 className='featureTitle'>Pay Friends Back</h3>
                                <p className='featureCaption'> Settle up with friend and record any cash or online payment.</p>
                            </div>
                        </div>
                    </div>
                    <img className='preview'src='https://spshurl.herokuapp.com/C0Aa4' alt='picture'/>
                </div>
            </div>
        </div>
    )
}

export default MiddleHero

