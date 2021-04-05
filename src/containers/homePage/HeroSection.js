import React from 'react'
import { Button } from '../../components/Buttons'

function HeroSection() {
    return (
        <div className='heroContainer'>
            <div className="heroLeft">
                <h3 className="heroLeftTitle">
                    Making Money Splitting Effortless
                </h3>
                <p className="heroLeftParagraph">
                Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
                </p>
                <div className="heroBtn">
                    <Button className='btn' buttonStyle='btnOutline'>
                        SIGN UP
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection
