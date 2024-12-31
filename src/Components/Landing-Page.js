import react, { useState, useEffect } from 'react';

export default function LandingPage() {
    return (
        <>
            <div className='main'>
                <Header>
                    <h1>Welcome to Cloud Nine Dispensary</h1>
                    <p>Our mission is to provide the best quality cannabis products to our customers.</p>
                    <div className="buttons">
                        <button>Shop Now</button>
                        <button>Learn More</button>
                    </div>
                </Header>
            </div>
        </>
    )
}