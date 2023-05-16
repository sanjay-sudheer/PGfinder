import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import logoimg from '../images/logo.png';
import pgimg from '../images/pg.jpg'
import './hero.css'
export default function hero() {
    return (
        <div className='hero'>
            <div className='nav'>
                <div className='nav-left'>
                    <img src={logoimg} alt="" />
                </div>
                <div className='nav-right'>
                    <a style={{textDecoration:'none'}} href="/login" className='login-btn'>login</a>
                </div>
            </div>

            <MouseParallaxContainer>
                <div className='hero-cont'>
                    <div className='hero-left'>
                        <p>Find your dream pg today!</p>
                        <a style={{textDecoration:'none'}} href="/join" className='join-btn'>join now</a>
                    </div>
                    <div className='hero-right'>
                        <MouseParallaxChild factorX={0.03} factorY={0.05}>
                            <img src={pgimg} alt="" />
                        </MouseParallaxChild>

                    </div>
                </div>
            </MouseParallaxContainer>

        </div>
    );
}
