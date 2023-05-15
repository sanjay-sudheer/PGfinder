import React from 'react'
import logoimg from '../images/logo.png';
import pgimg from '../images/pg.jpg'
export default function hero() {
    return (
        <div className='hero'>
            <div className='nav'>
                <div className='nav-left'>
                    <img src={logoimg} alt="" />
                </div>
                <div className='nav-right'>
                    <button className='login-btn'>login
                    </button>
                </div>
            </div>
            <div className='hero-cont'>
                <div className='hero-left'>
                    <p>Find your dream pg today!</p>
                    <button className='join-btn'>join now</button>
                </div>
                <div className='hero-right'>
                    <img src={pgimg} alt="" />
                </div>
            </div>
        </div>
    );
}
