import react, { useState, useEffect } from 'react';
import '../CSS/Landing-Page.css';

export default function LandingPage() {
    return (
        <>
            <div className='main'>
                <div className='header'>
                    <h1>Welcome to Cloud Nine Dispensary</h1>
                    <p>Our mission is to provide the best quality cannabis products to our customers.</p>
                    <div className="buttons">
                        <a href='#'>Shop Now</a>
                        <a href='#'>Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}